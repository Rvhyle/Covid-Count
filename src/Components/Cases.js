import React from 'react';
// Styles
import { CasesStyled } from '../Styled-Components/StyledCases';

const Cases = ({
    usCases,
    usDeaths,
    usNegatives,
    usRecovered,
    usHospitalized,
    usDeathIncrease,
    usCaseIncrease,
    usTestTotal
}) => {

    return (
        <CasesStyled>
            <div>
                <h1>Cases:</h1>
                {/* Formatted data to be seperated with commas for readability */}
                <h2>{usCases.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Deaths:</h1>
                <h2>{usDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Negatives:</h1>
                <h2>{usNegatives.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Recovered:</h1>
                <h2>{usRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Hospitalized:</h1>
                <h2>{usHospitalized.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Case Increase:</h1>
                <h2>{usCaseIncrease.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Death Increase:</h1>
                <h2>{usDeathIncrease.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
            <div>
                <h1>Tests:</h1>
                <h2>{usTestTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h2>
            </div>
        </CasesStyled>
    )
}

export default Cases;