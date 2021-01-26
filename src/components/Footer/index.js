import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: ${({ theme }) => theme.colors.lightText};
        text-decoration: none;
        transition: .3s;
        &:hover,
        &:focus {
            opacity: .5;
        }
        span {
            text-decoration: underline;
        }
    }
`;

function Footer(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="logo alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}

export default Footer;
