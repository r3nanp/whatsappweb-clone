import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #D2DBDC;
    font-family: 'Segoe UI', Helvetica Neue, Arial, Helvetica, sans-serif, Lucida Grande, Arial, sans-serif;
  }

  h1, h2, strong, span, p {
    color: var(--primary);
  }

  :root {
    --primary: #fff;
    --background-default: #131c21;
    --beige: #e5ddd5;
    --header-color: #b1b3b5;
    --button-color: #919191;
    --background-dark: #090e11;
    --search-background: #323739;
    --border: #eee;
    --header: #2a2f32;
    --chat-hover: #f5f5f5;
    --gray: #999;

    --scroll: hsla(0,0%,100%,.16);
  }
`
