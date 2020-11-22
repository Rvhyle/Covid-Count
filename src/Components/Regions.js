import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import { RegionStyled, Region } from '../Styled-Components/StyledRegions';


const Regions = () => {
    return (
        <Region>
            <h1>Cases For Each Region:</h1>
            <RegionStyled>
                <Link to="/charts" className="link">
                    <h2>See Charts</h2>
                </Link>
            </RegionStyled>
            <h3>*Updates at 24:00:00Z</h3>
        </Region>
    )
}

export default Regions;