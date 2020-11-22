import React, {useEffect} from 'react';
// Components
import NorthEast from '../Components/NorthEast';
import MidWest from '../Components/MidWest';
import SouthEast from '../Components/SouthEast';
import SouthWest from '../Components/SouthWest';
import West from '../Components/West';
// Styled Components
import { StyledCharts } from '../Styled-Components/StyledCharts';

const USCharts = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    })

    return (
        <StyledCharts>
            <h1 className="title">Charts</h1>
            <div className="charts">
                <div className="chart">
                    <NorthEast />
                </div>
                <div className="chart">
                    <MidWest />
                </div>
                <div className="chart">
                    <SouthEast />
                </div>
                <div className="chart">
                    <SouthWest />
                </div>
                <div className="chart">
                    <West />
                </div>
            </div>
        </StyledCharts>
    )
}

export default USCharts;