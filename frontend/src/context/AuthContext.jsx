import { createContext,useContext,useState,useEffect } from "react";

import { loginUser, registerUser } from "../api/requests.js";
import axios from "../api/axios.config.js";
import Cookie from 'js-cookie'




export const AuthContext = createContext()

export const useAuth = ()=>{
    const contextHook = useContext(AuthContext)
    if (!contextHook){
        throw new Error("Este hook se usa dentro de un provider")
    }
    return contextHook


}

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState("")
    const [errors,setErrors] = useState([])
    const [authOK,setAuthOK] = useState(false)
    // const [flagError,setFlagError] = useState(false)
    const [msg,setMsg] = useState("mensaje")

    const responsesHandler = (valuesFromresponse)=>{
        
        try {
            
            if (!valuesFromresponse.data.errorsAlertTexts){
                setUser(valuesFromresponse.data.userSaved.username)
                setAuthOK(true)
            }else{
                setErrors(valuesFromresponse.data.errorsAlertTexts)
            }

        } catch (error) {
            console.log("Something went wrong",error)
        }

    }

    const signUp = async (values)=>{
        const registerResponse = await registerUser(values)
        console.log(registerResponse)
        if (registerResponse) {
            return responsesHandler(registerResponse)
        }
    
    }

    const logInUserInSite = async(values)=>{
        const resLogIn = await loginUser(values)
        if (!resLogIn.data.message) {
            return responsesHandler(resLogIn)
        }else{
            console.log(resLogIn.data.message)
        }
        
    }

    const customLogin = async (loginData)=>{
        const res = await axios.post('/api/login',loginData)
        console.log(res)
        if(!res.data.message){
            localStorage.setItem('user',JSON.stringify(res.data.username))
            localStorage.setItem('authOK',true)

            setUser(res.data.username) 
            setAuthOK(true)

        }else{
            setErrors(res.data.message)
        }
    }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
        setAuthOK(localStorage.getItem('authOK'))
    },[])
  
        

    const logoutUser = async ()=>{

        try {
            const res = await axios.post('api/logout')
            localStorage.clear()
            setAuthOK(false)
            Cookie.remove('token')
    

            return res
        } catch (error) {
            console.log(error)
        }
    }
 





    return(
            <AuthContext.Provider value = {{
                signUp,
                logInUserInSite,
                customLogin,
                logoutUser,
                user,
                setUser,
                errors,
                authOK,
                setAuthOK,
                msg,
                setMsg
            }}>
                {children}
            </AuthContext.Provider>
)
}



