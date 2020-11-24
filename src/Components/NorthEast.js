import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const NorthEast = () => {

    const NEStates = ['ME', 'VT', 'NH', 'MA', 'NY', 'NJ', 'PA', 'RI', 'CT'];
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [neData, setNeData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});

    const ChartSetUp = () => {
        getStateData(NEStates)
            .then(data => {
                setNeData([...data])
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...NEStates],
            datasets: [
                {
                    label: "Positive Cases in NE Region",
                    data: [...neData],
                    backgroundColor: '#fa3030'
                }
            ]
        })
    }

    useEffect(() => {
        ChartSetUp();
    }, [...neData]);

    return (
        <Bar
            data={chartData}
            options={
                {
                    responsive: true,
                    title: { display: true, text: "North East Region Cases", fontSize: 20, fontColor: '#ffffff' },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawTicks: true,
                                color: 'rgba(255, 255, 255, 0.10)'
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                drawTicks: true,
                                color: 'rgba(255, 255, 255, 0.35)'
                            }
                        }]
                    }
                }
            } />
    )
}

export default NorthEast;