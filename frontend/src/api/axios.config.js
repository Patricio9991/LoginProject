import axios from 'axios'
import cookie from 'js-cookie'


const localhost = "http://localhost:4000/"
const render = "https://loginproject-1.onrender.com"

const axiosConfig = axios.create({
    baseURL: render,
    withCredentials: true,
})  

console.log(cookie.get(),"pepe")

export default axiosConfig