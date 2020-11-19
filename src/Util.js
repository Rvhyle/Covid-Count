// API CALLS
export async function fetchCases() {
    try {
        let res = await fetch('https://api.covidtracking.com/v1/us/current.json')
        let data = await res.json()
        return data[0];

    } catch (err) {
        console.log(err)
    }
}

