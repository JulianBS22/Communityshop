import axios from "axios";

const client = axios.create ({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const setAuthorizationHeader = token =>(client.defaults.headers.common['Authorization'] = `Bearer ${token}`);

client.interceptors.response.use(response=>response.data);

export default client;