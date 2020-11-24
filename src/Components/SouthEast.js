import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const SouthEast = () => {
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [seData, setSeData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});
    const [seStates] = useState(['MD', 'DE', 'WV', 'VA', 'KY', 'TN', 'AR', 'LA', 'MS', 'AL', 'NC', 'SC', 'GA', 'FL']);


    useEffect(() => {
        let mounted = true;

        getStateData(seStates)
            .then(data => {
                if (mounted) { //Gets rid of Memory Leaks, Stops Api call and prevents state change when unmounting component
                    setSeData([...data])
                }

            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...seStates],
            datasets: [
                {
                    label: "Positive Cases in SE Region",
                    data: [...seData],
                    backgroundColor: '#1573df'
                }
            ]
        })

        return () => {
            mounted = false;
        }

    }, [seData, seStates]);

    return (
        <Bar
            data={chartData}
            options={
                {
                    responsive: true,
                    title: { display: true, text: "South East Region Cases", fontSize: 20, fontColor: '#ffffff' },
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

export default SouthEast;