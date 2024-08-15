import axios from 'axios'



const axiosConfig = axios.create({
    baseURL: "https://loginproject-1.onrender.com",
    withCredentials:true
})  

export default axiosConfig