import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const SouthWest = () => {

    const SWStates = ['AZ', 'NM', 'TX', 'OK'];
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [swData, setSwData] = useState([1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});

    const ChartSetUp = () => {
        getStateData(SWStates)
            .then(data => {
                setSwData([...data])
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...SWStates],
            datasets: [
                {
                    label: "Positive Cases in SW Region",
                    data: [...swData],
                    backgroundColor: '#53f72b'
                }
            ]
        })
    }

    useEffect(() => {
        ChartSetUp();
    }, [...swData]);

    return (
        <Bar data={chartData} options={{ responsive: true }} />
    )
}

export default SouthWest;