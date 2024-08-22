import axios from 'axios'

const localhost = "http://localhost:4000/"
const render = "https://loginproject-1.onrender.com"

const axiosConfig = axios.create({
    baseURL: render,
    withCredentials: true
})  

export default axiosConfig