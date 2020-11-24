import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const SouthWest = () => {
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [swData, setSwData] = useState([1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});
    const [swStates] = useState(['AZ', 'NM', 'TX', 'OK']);

    useEffect(() => {
        let mounted = true;

        getStateData(swStates)
            .then(data => {
                if (mounted) { //Gets rid of Memory Leaks, Stops Api call and prevents state change when unmounting component
                    setSwData([...data])
                }

            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...swStates],
            datasets: [
                {
                    label: "Positive Cases in SW Region",
                    data: [...swData],
                    backgroundColor: '#53f72b'
                }
            ]
        })

        return () => {
            mounted = false;
        }

    }, [swData, swStates]);

    return (
        <Bar
            data={chartData}
            options={
                {
                    responsive: true,
                    title: { display: true, text: "South West Region Cases", fontSize: 20, fontColor: '#ffffff' },
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

export default SouthWest;