import React, { useState, useEffect } from 'react';
import { getStateData } from '../Util';
//Components
import { Bar } from 'react-chartjs-2';


const West = () => {

    const WestStates = ['WA', 'MT', 'OR', 'ID', 'WY', 'CA', 'NV', 'UT', 'CO', 'AK', 'HI'];
    // Deault Array will be dfaulted to 1 till Promises are fulfilled for each state
    const [westData, setWData] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [chartData, setChartData] = useState({});

    const ChartSetUp = () => {
        getStateData(WestStates)
            .then(data => {
                setWData([...data])
            })
            .catch(err => console.log(err));

        setChartData({
            labels: [...WestStates],
            datasets: [
                {
                    label: "Positive Cases in West Region",
                    data: [...westData],
                    backgroundColor: '#f59a12'
                }
            ]
        })
    }

    useEffect(() => {
        ChartSetUp();
    }, [...westData]);

    return (
        <Bar 
        data={chartData} 
        options={
            { 
                responsive: true ,
                title: {display: true,text:"West Region Cases",fontSize:20,fontColor:'#ffffff'},
                scales:{
                    xAxes:[{
                            gridLines: {
                            drawTicks: true,
                            color:'rgba(255, 255, 255, 0.10)'
                            }
                    }],
                    yAxes:[{
                        gridLines: {
                        drawTicks: true,
                        color:'rgba(255, 255, 255, 0.35)'
                        }
                    }]
                }
            }
        } />
    )
}

export default West;