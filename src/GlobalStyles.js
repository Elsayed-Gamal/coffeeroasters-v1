import { createGlobalStyle } from 'styled-components';

export const mobileWidth = 450;

const GlobalStyles = createGlobalStyle`
  :root {
    --color-darkCyan: #0E8784;
    --color-darkGrey: #333D4B;
    --color-paleOrange: #FDD6BA;
    --color-lightCream: #FEFCF7;
    --color-grey: #83888F;

    --mobile-width: ${mobileWidth}px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: "Barlow", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  h1, h2, h3, h4 {
    font-family: "Fraunces", serif;
    font-weight: 900;
  }

  h1 {
    font-size: 72px;
    line-height: 72px;
  }

  h2 {
    font-size: 40px;
    line-height: 48px;
  }

  h3 {
    font-size: 32px;
    line-height: 36px;
  }

  h4 {
    font-size: 24px;
    line-height: 32px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--color-grey);
  }
`;

export default GlobalStyles;
