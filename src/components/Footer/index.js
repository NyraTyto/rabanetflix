import React from 'react';
import FooterBase from './styles';
import Linkedin from '../../assets/images/linkedin.svg';
import Github from '../../assets/images/github.svg';
import Instagram from '../../assets/images/instagram.svg';
import Facebook from '../../assets/images/facebook.svg';

function Footer() {
  return (
    <FooterBase>
      <div>
        <a href="https://www.linkedin.com/in/juana-paiva/">
          <img className="Logo" src={Linkedin} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/jubafuu/">
          <img className="Logo" src={Github} alt="Facebook" />
        </a>
        <a href="https://github.com/NyraTyto">
          <img className="Logo" src={Instagram} alt="Facebook" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008840581765">
          <img className="Logo" src={Facebook} alt="Facebook" />
        </a>
      </div>
      <p>
        Projeto criado durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
      <p>&copy; 2020. Juana Paiva</p>
    </FooterBase>
  );
}

export default Footer;
