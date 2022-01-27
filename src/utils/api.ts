const Axios = require('axios');
const fs = require('fs');

const fetchData = async () => {
    try {
        return await Axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    } catch (error) {
        console.error(error)
      }
}

export const loadData = async () => {
    const response = await fetchData();
    let data = {}
    const fast = Object.assign(data, {fast: response.data.fast / 10});
    const fastest = Object.assign(data, {fastest: response.data.fastest / 10});
    const safeLow = Object.assign(data, {safeLow: response.data.safeLow / 10});
    const average = Object.assign(data, {average: response.data.average / 10});

    const gas = JSON.stringify(data)
    
    fs.writeFile('../constants/json/gas.json', gas, (err) => {
        if (err) return console.log(err);
        console.log('Saved');
    })
}

