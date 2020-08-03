import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: #919191;
  text-align: center;

  & img {
    width: 35px;
    margin: 0 7.5px;
    transition: .3s;
  }
  & img:hover {
    width: 40px;
  }

  & a {
    text-decoration: none;
    font-weight: bold;
    transition: .3s;
  }
  & a:hover {
    color: #c4c4c4;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default FooterBase;
