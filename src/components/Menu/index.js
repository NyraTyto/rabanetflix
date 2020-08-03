import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo-rabanetflix.png';
import './Menu.css';
import Button from '../Button';

function pageButton(pageName) {
  const { page } = pageName;
  const btnHome = <Button className="ButtonLink" as={Link} to="/">Página Inicial</Button>;
  const btnNewVideo = <Button className="ButtonLink" as={Link} to="/cadastro/video">Novo vídeo</Button>;
  const btnNewCategory = <Button className="ButtonLink" as={Link} to="/cadastro/categoria">Nova categoria</Button>;

  if (page === 'home') {
    return (
      <div>
        {btnNewVideo}
        {btnNewCategory}
      </div>
    );
  } if (page === 'video') {
    return (
      <div>
        {btnHome}
        {btnNewCategory}
      </div>
    );
  }
  return (
    <div>
      {btnHome}
      {btnNewVideo}
    </div>
  );
}

function Menu(page) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Rabanetflix logo" />
      </Link>

      {pageButton(page)}
    </nav>
  );
}

export default Menu;
