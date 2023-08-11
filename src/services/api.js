import axios from 'axios';

 const api = axios.create({
   // ip local do arduino | verificar no server monitor do arduino
    baseURL: 'http://192.168.1.13/',
 })

 export default api;