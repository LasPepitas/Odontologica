import axios from 'axios';

const api = axios.create({
    baseURL: 'https://odontologica.onrender.com/api/v1',
});

export default api;