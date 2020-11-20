import React from 'react';
// Styles
import { CasesStyled } from '../Styled-Components/StyledCases';

const Cases = ({ usCases, setUsCases, usDeaths, setUsDeaths}) => {

    return (
        <CasesStyled>
            <div className="data cases">
                <h1>USA Total Cases:</h1>
                {/* Formatted data to be seperated with commas for readability */}
                <h2>{usCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div className="data deaths">
                <h1>USA Total Deaths:</h1>
                <h2>{usDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
        </CasesStyled>
    )
}

export default Cases;