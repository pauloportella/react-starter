import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${({ theme }) => theme.fontFamily.regular};
    src: url("fonts/HelveticaNeue-Roman.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: ${({ theme }) => theme.fontFamily.light};
    src: url("fonts/HelveticaNeue-Lt.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${({ theme }) => theme.fontFamily.medium};
    src: url("fonts/HelveticaNeue-Medium.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${({ theme }) => theme.fontFamily.bold};
    src: url("fonts/HelveticaNeue-Bold.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
  }

  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: ${props => props.theme.fontFamily.regular};
    font-size: 1em;
    color: ${props => props.theme.colors.text.default};
  }

  input, textarea {
    font-family: ${props => props.theme.fontFamily.regular};
    font-size: 1em;
    color: ${props => props.theme.colors.text.default};
  }

   button > a {
     text-decoration: none;
     color: inherit
   }
`

export default GlobalStyle
