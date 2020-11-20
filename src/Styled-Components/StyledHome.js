import styled from 'styled-components';
import img from '../Img/CovidPic.png';

export const Home = styled.div`
text-align:center;
min-height:680px;
max-height:100vh;

background-image:linear-gradient(rgba(15, 15, 15, 0.91),rgba(15, 15, 15, 0.91)),url(${img});
background-size:cover;
background-repeat:no-repeat;
background-position:justify;
background-position-y:350px;
background-position-x:-100px;
background-attachment:fixed;
`