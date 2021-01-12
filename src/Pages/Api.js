import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/nova-trilha/public/api/login.php'
});

export default api;