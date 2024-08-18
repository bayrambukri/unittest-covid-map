covid api: import axios from 'axios';

const options = {
method: 'GET',
url: 'https://covid-19-statistics.p.rapidapi.com/regions',
headers: {
'x-rapidapi-key': '3a8087ad04msh0dc6c6895dcd364p11b377jsnff1287881adc',
'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

2.api: https://restcountries.com/
# unittest-covid-map
