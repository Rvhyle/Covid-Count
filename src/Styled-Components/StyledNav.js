import styled from 'styled-components';

// NAV BODY
export const NavStyled = styled.nav`
    display: flex;
    max-width:100vw;
    justify-content:space-between;
    align-items:center;
    height:80px;
    background-color:#252525;

    .title{
        text-decoration:none;
    }
/* Mobile Screen */
    @media screen and (max-width:767px) {
        flex-direction:column;
        justify-items:center;
        text-align:center;
        height:130px;
    }
`

// TITLE
export const Title = styled.div`
padding-left:8rem;
h1{
    color:White;
    font-weight:500;
    text-transform:uppercase;
    padding-bottom:0.2rem;
}

p{
    color:white;
    opacity:50%;
    font-size:.8rem;
}
/* Mobile Screens */
@media screen and (max-width:767px) {
    padding:0rem;
    padding-top:1rem;
}
`

// LINKS
export const NavLinks = styled.ul`
display: flex;
gap:50px;
padding-right:8rem;
li{
    list-style:none;
    font-size:1.2rem;

    .link{
        color:white;
        text-decoration:none;

        &:focus {
            text-decoration:underline;
        }
    }
}
/* Mobile Screens */
@media screen and (max-width:767px) {
    padding:2rem;
}
`
