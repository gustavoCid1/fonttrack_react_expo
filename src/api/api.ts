import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.6:3000/api', // Reemplaza con la IP local de tu backend
    timeout: 5000,
});

export default api;
