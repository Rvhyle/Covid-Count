import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    max-width:1920px;
    margin: auto;
}

body{
    font-family: 'Rubik', sans-serif;
    background-color: #0F0F0F;
}

h1{
    color: white;
}
`

export default GlobalStyle;