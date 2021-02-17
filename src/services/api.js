import axios from 'axios';

 const api = axios.create({
    baseURL: 'http://192.168.100.30',
 })

 export default api;