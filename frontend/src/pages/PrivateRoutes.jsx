import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Cookie from 'js-cookie'
import { useEffect } from "react";


export default function PrivateRoutes(){

    let flagCookie = false
 

    if (Cookie.get().token){
            flagCookie = true
            
    }else{
            localStorage.clear()
            flagCookie = false

        }

    return flagCookie? <Outlet/> : <Navigate to={'/login'}/>
}