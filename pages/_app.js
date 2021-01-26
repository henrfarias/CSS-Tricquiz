import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    /* Deixa branco no começo */
    color: ${({ theme }) => theme.colors.darkText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts. gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta property="og:image" content="https://images-ext-1.discordapp.net/external/S0EFbTnYFImAVp0YFyTnMbNdHCCvSqS0LB5rJ8i3TQE/https/lh6.googleusercontent.com/7BDMcK5wuWmyOIQ0_iCIKDFugIo88n75YfXDWhELVkkdsZm92lfo5ctgMT2NPQJMiqfa-YeryxEx3senN15i%3Dw1920-h937-rw?width=878&height=500" />
        <meta property="og:url" content="https://css-tricquiz-git-main.henrfarias.vercel.app/" />
        <meta property="og:title" content="CSS Tricquiz" />
        <meta property="og:type" content="game" />
        <meta property="og:description" content="Teste seus conhecimentos de CSS com este quiz sobre truques mágicos do CSS!" />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
