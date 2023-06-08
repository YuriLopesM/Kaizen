import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::selection {
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.orange};
    }

    html, body {
      height: 100vh;
    }

    body {
      background: ${props => props.theme.colors.dark_blue};
      color: ${props => props.theme.colors.white};
    }

    body, 
    input, 
    textarea, 
    select, 
    button {
        font: 400 1rem Outfit, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Outfit, sans-serif
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    
    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.blue_600};
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.blue_400};
        border-radius: 0.5rem;
    }
`

export default GlobalStyle;