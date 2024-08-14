import axios from 'axios'

const serverUrl = 'mongodb+srv://ppuchetadev:0WCxf2u7foTEDOWJ@mern-landr.htkyrnn.mongodb.net/?retryWrites=true&w=majority&appName=MERN-LandR'

const axiosConfig = axios.create({
    baseURL:`${serverUrl}`,
    withCredentials:true
})  

export default axiosConfig