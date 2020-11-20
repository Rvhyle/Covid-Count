import { createGlobalStyle } from 'styled-components';
import img from '../Img/CovidPic.jpg';

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

    background-image:linear-gradient(rgba(15, 15, 15, 0.91),rgba(15, 15, 15, 0.91)),url(${img});
    background-size:cover;
    background-position:center;
    background-position-y:50px;
}

h1{
    color: white;
}
`

export default GlobalStyle;