import axios from 'axios'



const axiosConfig = axios.create({
    baseURL: "https://loginproject-1.onrender.com"
})  

export default axiosConfig