import axios from './axios.config'



export const registerUser = async (data)=>{
    try {
        const sendDataUser = await axios.post(`/api/register`,data)
        return sendDataUser
    } catch (error) {
        console.log(error)
    }
}




export const loginUser = async (user)=>{
    try{

        const registerUser = await axios.post(`/api/login`,user)
        return registerUser
    }catch(e){
        console.log(e)
    }
}