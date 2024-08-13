import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Navigate} from 'react-router-dom'
import Cookie from 'js-cookie' //para manejar las cookies desde el front



export default function LogInPage(){

    
    const {register,handleSubmit} = useForm()

    const {authOK,customLogin} = useAuth()

   
    if (authOK) return <Navigate to={'/profile'} />
    return(
        <Fragment>
            <h1>This is the LogInPage page</h1>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="w-full max-w-md bg-slate-700  flex flex-col justify-center align-middle p-6 rounded-md">
                <h1 className="text-2xl font-bold">Login</h1>
                    <form onSubmit={handleSubmit(async (data)=>{await customLogin(data)})} className="flex flex-col gap-3">
                        
                        <label htmlFor="email" id="email" >Email</label>
                        <input {...register("email", {required:true}) } className="w-full rounded-xl p-3" placeholder="Email"/>

                        <label htmlFor="password" id="password">Password</label>
                        <input type="password" {...register("password", {required:true}) } className="w-full rounded-xl p-3" placeholder="Password"/>

                        <button type="submit" className="py-4 hover:bg-blue-300 hover:rounded-md">Login</button>
                        
                    </form>
                    

                </div>
            </div>
        </Fragment>
    )
}