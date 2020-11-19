import styled from 'styled-components';

// NAV BODY
export const NavStyled = styled.nav`
    display: flex;
    max-width:100vw;
    padding:0rem 8rem;
    justify-content:space-between;
    align-items:center;
    height:112px;
    background-color:#252525;

    .title{
        text-decoration:none;
    }
`

// TITLE
export const Title = styled.div`

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
`

// LINKS
export const NavLinks = styled.ul`
display: flex;
li{
    list-style:none;
    padding-left:1.5rem;

    .link{
        color:white;
        text-decoration:none;

        &:focus {
            text-decoration:underline;
        }
    }
}
`
