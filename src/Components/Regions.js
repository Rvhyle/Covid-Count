import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import { RegionStyled, Region } from '../Styled-Components/StyledRegions';


const Regions = () => {
    return (
        <Region>
            <h1>Select a US region:</h1>
            <RegionStyled>
                <Link to="/east" className="link">
                    <h2>East</h2>
                </Link>
                <Link to="/central" className="link">
                    <h2>Central</h2>
                </Link>
                <Link to="/west" className="link">
                    <h2>West</h2>
                </Link>
            </RegionStyled>
            <h3>*Updates at 24:00:00Z</h3>
        </Region>
    )
}

export default Regions;