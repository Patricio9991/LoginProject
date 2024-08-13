import { useNavigate,redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect} from "react";

import { useAuth } from "../context/AuthContext.jsx";

export default function RegisterPage(){

    const {register, handleSubmit} = useForm()
    const {signUp,user,errors,authOK,msg,setMsg} = useAuth()


    console.log(user,errors,authOK)

    function backTologin(param){

        const navigate = useNavigate()

        useEffect(()=>{
                param? navigate('/login') : ""
            },[param])

    }

    backTologin(authOK)
    console.log(msg)
    // const registerData = data => console.log(data)
    return(
        <div>

            <h1 onClick={()=>{setMsg("clickeado desde el children pepe");console.log(msg)}}>This is the register page</h1>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="max-w-md bg-slate-700 rounded-md flex flex-col justify-center align-middle">
                    <form onSubmit={handleSubmit(async (values)=>{
                        signUp(values);
                       
                    })} >
                        <label htmlFor="username" id="username">Username</label>
                        <input {...register("username", {required:true, maxLength:10}) } className="w-full"/>

                        <label htmlFor="email" id="email">Email</label>
                        <input {...register("email", {required:true}) } className="w-full"/>

                        <label htmlFor="password" id="password">Password</label>
                        <input type="password" {...register("password", {required:true}) } className="w-full"/>

                        <button type="submit" className="py-4">Register</button>
                        
                    </form>
                    {console.log(typeof(errors))}
                    {errors ? errors.map((error,i)=>{
                        return ( <h1 className="text-red-800 bg-red-500" key={i}>{error}</h1>)}):""}
                    

                </div>
            </div>





        </div>




        
    )
}