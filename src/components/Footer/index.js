import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/images/logo-rabanetflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Rabanetflix logo" />
      </a>
      <p>
        Criado por
        {' '}
        <a href="https://www.linkedin.com/in/juana-paiva/">Juana Paiva</a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
