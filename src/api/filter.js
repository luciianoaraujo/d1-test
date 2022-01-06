import axios from 'axios' ;

const filter = axios.create({
    baseURL: 'https://api-d1-test.herokuapp.com/api/filter'
});

export default filter;