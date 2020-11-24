import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { NavStyled, Title } from '../Styled-Components/StyledNav'

const Nav = () => {
    return (
        <NavStyled>
            <Link to="/" className="title">
                <Title>
                    <h1>Covid Count</h1>
                    <p>Powered by CovidTracking.com</p>
                </Title>
            </Link>
        </NavStyled>
    )
}


export default Nav;