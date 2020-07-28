import React from 'react';
import Logo from '../../assets/images/logo-rabanetflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Rabanetflix logo" />
      </a>

      <Button className="ButtonLink" as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;