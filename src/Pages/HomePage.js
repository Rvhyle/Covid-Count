import React, { useState, useEffect } from 'react';
import { fetchCases } from '../Util';
// Components
import Cases from '../Components/Cases';
// Styled Components
import { Home } from '../Styled-Components/StyledHome';

const HomePage = () => {
    const [usCases, setUsCases] = useState(0);

    // Call To API
    useEffect(() => {
        fetchCases()
            .then(data => {
                setUsCases(data.positive)
            })
            .catch(err => console.log(err));
    });

    return (
        <Home>
            <Cases usCases={usCases} setUsCases={setUsCases} />
        </Home>
    )
}

export default HomePage;