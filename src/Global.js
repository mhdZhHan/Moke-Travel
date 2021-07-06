import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    appearance: none;
    text-decoration: none;
    color: #222;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  a.developer {
    color: dodgerblue;
  }
`;
export default Global;