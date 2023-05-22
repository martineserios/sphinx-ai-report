import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
  }

#root{
    height: 100vh;
  font-family: Open-Sans, Helvetica, Sans-Serif;
  
}

html{
    height: 100%;
}


body {
  overflow-x: hidden;
  min-height: 100%;}
  font-family: Open-Sans, Helvetica, Sans-Serif;
`;

export default GlobalStyle;

//#323A46, #7B40CA
