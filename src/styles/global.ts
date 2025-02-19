import { createGlobalStyle } from 'styled-components';

export const mediaQuery = {
  mobileSm: '@media screen and (max-width: 420px)',
  mobile: '@media screen and (max-width: 600px)',
  tablet: '@media screen and (max-width: 768px)',
  tabletMd: '@media screen and (max-width: 900px)',
  desktop: '@media screen and (max-width: 1280px)',
  desktopSm: '@media screen and (max-width: 1366px)',
  desktopMd: '@media screen and (max-width: 1440px)',
  desktopMdLg: '@media screen and (max-width: 1553px)',
  desktopLg: '@media screen and (min-width: 1920px)',
  custom: (size: number) => `@media screen and (max-width: ${size}px)`,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  body, input, textarea, button, span, p, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    ${mediaQuery.mobile} {
      font-size: 18px !important;
    }
  }

  h1, h2, h3 {
    font-family: 'Inter', sans-serif;
    
    ${mediaQuery.mobile} {
      font-size: 22px !important;
    }
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }


  .custom-datepicker {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    
  }

  .custom-datepicker:focus {
    outline: none;
    border-color: black;
  }
`;
