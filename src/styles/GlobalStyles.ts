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

  :root {
    --primary: #fff;
    --beige: #e5ddd5;
    --header-color: #b1b3b5;
    --background-light: #EDEDED;
    --button-color: #919191;
    --background-dark: #090e11;
    --search-background: #323739;
    --border: #ddd;
    --header: #2a2f32;
  }
`
