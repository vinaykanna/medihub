import axios from 'axios';

// Create an axios client with default headers
const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient; 