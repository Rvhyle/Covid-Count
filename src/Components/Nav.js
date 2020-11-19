import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { NavStyled, Title, NavLinks } from '../Styled-Components/StyledNav'

const Nav = () => {
    return (
        <NavStyled>
            <Link to="/" className="title">
                <Title>
                    <h1>Covid Count</h1>
                    <p>Powered by CovidTracking.com</p>
                </Title>
            </Link>
            <NavLinks>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/east">East</Link></li>
                <li><Link className="link" to="/central">Central</Link></li>
                <li><Link className="link" to="/west">West</Link></li>
            </NavLinks>
        </NavStyled>
    )
}


export default Nav;