import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyled>
            <a href="https://github.com/Rvhyle/Covid-Count" target="_blank">GitHub Repository</a>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
display: flex;
align-items:center;
justify-content:center;
width: 100%;
height:50px;
position:fixed;
bottom:0;
background-color:#252525;
 a{
    color: white;
    text-decoration:none;
    opacity: 40% ;
    transition: opacity 0.5s ease;

    &:hover {
        opacity: 1;
    }
 }
`

export default Footer;