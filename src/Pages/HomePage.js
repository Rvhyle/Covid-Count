import React, { useState, useEffect } from 'react';
import { fetchCases } from '../Util';
// Components
import Cases from '../Components/Cases';
import Regions from '../Components/Regions';
// Styled Components
import { Home } from '../Styled-Components/StyledHome';

const HomePage = () => {
    const [usCases, setUsCases] = useState(0);
    const [usDeaths, setUsDeaths] = useState(0);

    // Will fetch API whenever component gets rendered/updated
    useEffect(() => {
        fetchCases()
            .then(data => {
                setUsCases(data.positive)
                setUsDeaths(data.death)
            })
            .catch(err => console.log(err));

        console.log("Mounted");

    });

    return (
        <Home>
            <Cases
                usCases={usCases}
                setUsCases={setUsCases}
                usDeaths={usDeaths}
                setUsDeaths={setUsDeaths}
            />
            <Regions />
        </Home>
    )
}

export default HomePage;