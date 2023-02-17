import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    height: 100vh;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
