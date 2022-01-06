import axios from 'axios' ;

const journey = axios.create({
    baseURL: 'https://api-d1-test.herokuapp.com/api/journey/'
});

export default journey;