import axios from 'axios';

export const getStateData = async (state) => {
    let dataArray = [];
    try {
        for (let i = 0; i < state.length; i++) {
            let res = await axios.get(`https://api.covidtracking.com/v1/states/${state[i]}/current.json`)
            dataArray.push(res.data.positive)
        }

        return dataArray;

    } catch (err) {
        console.log(err);
    }
}
