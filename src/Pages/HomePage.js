import React, { useState, useEffect } from 'react';
import { fetchCases } from '../Util';
// Components
import Cases from '../Components/Cases';
import Regions from '../Components/Regions';
// Styled Components
import { Home } from '../Styled-Components/StyledHome';

const HomePage = () => {
    const [usCases, setUsCases] = useState(0);
    const [usDeaths,setUsDeaths] = useState(0);

    // Call To API
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
                usDeaths = {usDeaths} 
                setUsDeaths = {setUsDeaths}
            />
            <Regions/>
        </Home>
    )
}

export default HomePage;