import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const SouthEast = () => {

    const SEStates = ['MD', 'DE', 'WV', 'VA', 'KY', 'TN', 'AR', 'LA', 'MS', 'AL', 'NC', 'SC', 'GA', 'FL'];
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [seData, setSeData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});

    const ChartSetUp = () => {
        getStateData(SEStates)
            .then(data => {
                setSeData([...data])
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...SEStates],
            datasets: [
                {
                    label: "Positive Cases in SE Region",
                    data: [...seData],
                    backgroundColor: '#1573df'
                }
            ]
        })
    }

    useEffect(() => {
        ChartSetUp();
    }, [...seData]);

    return (
        <Bar data={chartData} options={{ responsive: true }} />
    )
}

export default SouthEast;