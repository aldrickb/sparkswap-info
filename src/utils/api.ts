const Axios = require('axios');

const fetchData = async () => {
    try {
        return await Axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    } catch (error) {
        console.error(error)
      }
}

const loadData = async () => {
    const response = await fetchData();
    let data = {}
    const fast = Object.assign(data, {fast: response.data.fast / 10});
    const fastest = Object.assign(data, {fastest: response.data.fastest / 10});
    const safeLow = Object.assign(data, {safeLow: response.data.safeLow / 10});
    const average = Object.assign(data, {average: response.data.average / 10});

    return data
}


// loadData();
loadData().then(console.log)