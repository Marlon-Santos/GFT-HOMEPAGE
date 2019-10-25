import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family: sans-serif;
  }
  html,body,#root{
    width: 100%;
    height:100% ;
  }
  body{
    padding:0 50px;
  }
`;
