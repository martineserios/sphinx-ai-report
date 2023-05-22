import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
#root{
    height: 100vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  
}

html{
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-image: linear-gradient(#323A46, #7B40CA);
    line-height: 20px;
  min-height: 100%;}
  font-family: Open-Sans, Helvetica, Sans-Serif;

`;

export default GlobalStyle;

//#323A46, #7B40CA
