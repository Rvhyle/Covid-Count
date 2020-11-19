import React from 'react';
// Styles
import { CasesStyled } from '../Styled-Components/StyledCases';

const Cases = ({ usCases, setUsCases }) => {

    return (
        <CasesStyled>
            <div className="totalCases">
                <h1>USA Total Cases:</h1>
                <h2>{usCases}</h2>
            </div>
            <div className="totalDeaths">
                <h1>USA Total Deaths:</h1>
                <h2>{/*Stats*/}</h2>
            </div>
        </CasesStyled>
    )
}

export default Cases;