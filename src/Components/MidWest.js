import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const MidWest = () => {

    const MWStates = ['MI', 'OH', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS'];
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [mwData, setMwData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});

    const ChartSetUp = () => {
        getStateData(MWStates)
            .then(data => {
                setMwData([...data])
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...MWStates],
            datasets: [
                {
                    label: "Positive Cases in MW Region",
                    data: [...mwData],
                    backgroundColor: '#a82cfc'
                }
            ]
        })
    }

    useEffect(() => {
        ChartSetUp();
    }, [...mwData]);

    return (
        <Bar data={chartData} options={{ responsive: true }} />
    )
}

export default MidWest;