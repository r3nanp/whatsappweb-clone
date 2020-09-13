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
    --background: #EDEDED;
    --border: #ddd;
  }
`
