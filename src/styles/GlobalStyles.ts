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
    color: rgba(241, 241, 242, 0.88);
  }

  :root {
    --primary: #fff;
    --background-default: #131c21;
    --beige: #e5ddd5;
    --header-color: #b1b3b5;
    --button-color: #919191;
    --background-dark: #090e11;
    --border: rgba(42,50,55,1);
    --header: #2a2f32;
    --gray: #999;
    --active-tab-marker: #054740;


    --chat-list: rgba(19, 28, 33, 1);

    --border-color: rgba(60, 66, 71, 1);
    --scroll: hsla(0,0%,100%,.16);
  }
`
