import axios from 'axios'

const serverUrl = 'http://localhost:3000'

const axiosConfig = axios.create({
    baseURL:`${serverUrl}`,
    withCredentials:true
})  

export default axiosConfig