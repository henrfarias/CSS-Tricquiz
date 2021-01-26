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
        <meta property="og:image" content="https://lh3.googleusercontent.com/fife/ABSRlIoL-8dxl1JC4fnQS0Aon356SPzm1Yv0nyk0DJKI82JhKgOupoItNgkWypBRAT6Ve-1QjdtVdbgXl51IOxZDTNt7K8Q4R4uwnLQ0hJNQv3Reebx78o_W4Bc_6GzypPEiornrXeN5Qed7EuAMevrg4_MPwhMxuWRCh790g4Qi0jLloHxvby9TBSRKjy7FzYqpVjy6hzlY-ldBUdD1ZVhqllmDP-z7XqyJcioQ8lNOMQ04xKS7xRUbmjroJ6sk22rbuKoZg4X6zfBoWMfnZbGqGKFD-piRCjcakz55HX8W3ufomMXks4Lv40MeFu7YmLsmIjzSmIQ31J8nzk2Y3TXbMTaXtH0fzIqbAOiSNZkyROtsJ-_wlRXQA40A2FRnZo5DW6ROkhCL6K6QyQWObdpzOyHKRJcp4zrgiaah9kY548iPydiuF4iky-SxW9bomowwHckHZFShQ4k1L9S52USOz74hmAtSe8MMiC9i-3-25FnNejaD8eduUJCLDimalew9hPRcO3SxtZzMN0yeDSVfkrj4sie7vB_4sxYDYWHWZ46-dMMtCWM44NA8TO5EOkLAAdTfcizGf_OJks9bu8aoX9JaCxzY3S4yJ5GXByF8dkOONmpQr9h4r37qq788T2r1QiWW5VlLUotQRIBR9w6LQ3GUaAXvqB4Tj00YFzNJErxRMwyVwpqdb0p0mFAGf7eojcHgZdAB_LodnrB-k1cZT-nLkrNWeQoamg=w1600-h767-ft" />
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
