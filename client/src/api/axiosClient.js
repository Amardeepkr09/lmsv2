import axios from 'axios';

<<<<<<< HEAD
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
=======
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
>>>>>>> feature/backend-integration

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    },
});