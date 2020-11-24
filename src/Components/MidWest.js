import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const MidWest = () => {
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [mwData, setMwData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});
    const [mwStates] = useState(['MI', 'OH', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS']);


    useEffect(() => {
        let mounted = true;

        getStateData(mwStates)
            .then(data => {
                if (mounted) { //Gets rid of Memory Leaks, Stops Api call and prevents state change when unmounting component
                    setMwData([...data])
                }
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...mwStates],
            datasets: [
                {
                    label: "Positive Cases in MW Region",
                    data: [...mwData],
                    backgroundColor: '#a82cfc'
                }
            ]
        })

        return () => {
            mounted = false;
        }

    }, [mwData, mwStates]);

    return (
        <Bar
            data={chartData}
            options={
                {
                    responsive: true,
                    title: { display: true, text: "Mid West Region Cases", fontSize: 20, fontColor: '#ffffff' },
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

export default MidWest;