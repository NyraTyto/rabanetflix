import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoryRepository from '../../repositories/categories';
import LoadingHome from '../../components/LoadingHome';
import rabanete from '../../assets/images/rabanete.png';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoryRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setDadosIniciais(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
        <LoadingHome>
          <img src={rabanete} alt="Loading" />
          <div className="loading">Carregando</div>
        </LoadingHome>
      )}

      {dadosIniciais.map((categoria, i) => {
        if (i === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle="Bem vindo ao Rabanetflix!"
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O Rabanetflix é um site inspirado na Netflix e foi criado durante a Imersão React Alura.
              Navegue pelas categorias de dar água na boca e delicie-se com os diversos vídeos de receitas!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
