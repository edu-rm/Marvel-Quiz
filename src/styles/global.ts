import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* font-family: 'Baloo Bhai 2', cursive; */
    font-family:  'Anton', serif;
    color: #292929;

  }

  *:focus {
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased ;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

`;
