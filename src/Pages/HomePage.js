import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components
import Cases from '../Components/Cases';
import Regions from '../Components/Regions';
// Styled Components
import { Home } from '../Styled-Components/StyledHome';

const HomePage = () => {
    const [usCases, setUsCases] = useState(0);
    const [usDeaths, setUsDeaths] = useState(0);
    const [usNegatives, setUsNegatives] = useState(0);
    const [usRecovered, setUsRecovered] = useState(0);
    const [usHospitalized, setUsHospitalized] = useState(0);
    const [usDeathIncrease, setUsDeathIncrease] = useState(0);
    const [usCaseIncrease, setUsCaseIncrease] = useState(0);
    const [usTestTotal, setUsTestTotal] = useState(0);
    // Fetch API from web
    const getData = async () => {
        let statArray = [];

        try {
            let res = await axios.get("//api.covidtracking.com/v1/us/current.json")
            // Capturing data from request
            let cases = res.data[0].positive;
            let death = res.data[0].death;
            let negative = res.data[0].negative;
            let recovered = res.data[0].recovered;
            let hospitalized = res.data[0].hospitalized;
            let deathIncrease = res.data[0].deathIncrease;
            let caseIncrease = res.data[0].positiveIncrease;
            let testTotal = res.data[0].totalTestResults;

            statArray = [cases, death, negative, recovered, hospitalized, deathIncrease, caseIncrease, testTotal];
            return statArray;
        } catch (err) {
            console.log(err);
        }
    }

    // Whenever Component Mounts/Updates
    useEffect(() => {
        let mounted = true;

        getData()
            .then(data => {
                if (mounted) {
                    setUsCases(data[0]);
                    setUsDeaths(data[1]);
                    setUsNegatives(data[2]);
                    setUsRecovered(data[3]);
                    setUsHospitalized(data[4]);
                    setUsDeathIncrease(data[5]);
                    setUsCaseIncrease(data[6]);
                    setUsTestTotal(data[7]);
                }
            })

        return () => {
            mounted = false;
        }

    }, []);

    return (
        <Home>
            <h1 className="title">USA TOTALS</h1>
            <Cases
                usCases={usCases}
                usDeaths={usDeaths}
                usNegatives={usNegatives}
                usRecovered={usRecovered}
                usHospitalized={usHospitalized}
                usDeathIncrease={usDeathIncrease}
                usCaseIncrease={usCaseIncrease}
                usTestTotal={usTestTotal}
            />
            <Regions />
        </Home>
    )
}

export default HomePage;