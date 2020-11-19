import React from 'react';
// Styles
import { CasesStyled } from '../Styled-Components/StyledCases';

const Cases = ({ usCases, setUsCases, usDeaths, setUsDeaths}) => {

    return (
        <CasesStyled>
            <div className="data cases">
                <h1>USA Total Cases:</h1>
                <h2>{usCases}</h2>
            </div>
            <div className="data deaths">
                <h1>USA Total Deaths:</h1>
                <h2>{usDeaths}</h2>
            </div>
        </CasesStyled>
    )
}

export default Cases;