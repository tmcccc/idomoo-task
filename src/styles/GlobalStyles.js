import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;



  * {
    transition: background-color 200ms ease-in, color 200ms ease-in, box-shadow 200ms ease-in, border 200ms ease-in, transform 200ms ease-in;
    box-sizing: border-box;
    
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    width: 4px;
    height: 4px;
    border: solid 3px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px #8a949e;
    border-radius: 10px;
    border: solid 3px transparent;
  }


`;
