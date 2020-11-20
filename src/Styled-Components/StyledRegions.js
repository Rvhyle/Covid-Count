import styled from 'styled-components';

export const RegionStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content: center;
gap:100px;
margin-top:2.5rem;

h2{
    font-size:2.5rem;
}

.link{
    text-decoration:none;
    color:white;
    width:300px;
    height:auto;
    padding:2rem 0rem;
    background-color:#DE4040;
    border:2px solid rgba(255, 255, 255, 0.31);
    border-radius:15px;
    transition:all 0.5s ease;

    &:hover {
        background-color:  #ff4141 ;
    }
}
`

export const Region = styled.div`
margin-top:6rem;

h1{
    font-size:1.7rem;
    font-weight:400;
}

h3{
    color:white;
    font-weight:300;
    padding-top:2rem;
    padding-bottom:4rem;
    opacity:0.3;
}
`