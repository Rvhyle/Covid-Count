import styled from 'styled-components';

export const CasesStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items:center;
padding:0rem 8rem;
margin-top:4rem;
gap:100px;
h2{
    color:#DE4040;
    font-size:2.7rem;
}

h1{
    font-size:2rem;
}

@media screen and (max-width:767px) {
    padding-bottom: 3rem;
}
`