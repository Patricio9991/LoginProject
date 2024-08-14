import axios from 'axios'



const axiosConfig = axios.create({
    withCredentials:true
})  

export default axiosConfig