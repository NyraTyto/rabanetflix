/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Loading from '../../../components/Loading';
import Table from '../../../components/Table';
import BackArrow from '../../../assets/images/back.svg';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  const [categoria, setCategoria] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategoria([
      ...categoria,
      values,
    ]);

    clearForm(valoresIniciais);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias/'
      : 'https://rabanetflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (res) => {
        const response = await res.json();
        setCategoria([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título da categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      {categoria.length === 0 && (
        <Loading>
          <div className="spinner" />
          Carregando...
        </Loading>
      )}

      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {categoria.map((categoria) => (
            <tr key={`${categoria.titulo}`}>
              <td>{categoria.titulo}</td>
              <td>{categoria.descricao}</td>
              <td><button type="button">Editar</button></td>
              <td><button type="button">Remover</button></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <LinkHome>
        <img src={BackArrow} alt="Voltar" />
        <Link to="/cadastro/video">
          Voltar
        </Link>
      </LinkHome>
    </PageDefault>
  );
}

const LinkHome = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 180px;
  height: 50px;
  margin-bottom: 50px;
  font-weight: bold;
  transition: .4s;
  border: 1px solid var(--black);
  padding: 15px;
  
  & img {
    width: 15px;
    margin-right: 10px;
  }
  &:hover {
    border-radius: 4px;
    border: 1px solid var(--white);
  }
`;

export default CadastroCategoria;
