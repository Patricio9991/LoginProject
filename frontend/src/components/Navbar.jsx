import { Fragment, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate} from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";
import Cookie from 'js-cookie'



export default function Navbar(){

    const {user,setUser,authOK,setAuthOK,logoutUser} = useAuth()
    const navigate = useNavigate()
    


    const quickLogout = ()=>{

        localStorage.clear()
        setAuthOK(false)
        Cookie.remove('token')

        navigate('/')
   }    


    return(
        <Fragment>

            <nav className="bg-blue-500 h-16 mx-8 flex justify-between items-center">

                <div className="font-bold text-2xl mx-3">
                    <Link to="/">
                        <h1>Task Manager App</h1>
                    </Link>
                </div>


                <div className="flex flex-row mx-11">
                    {authOK? (
                        <div className="flex items-center flex-row">

                        <Link to="/profile" className="flex items-center space-x-2">
                            <FaRegCircleUser size={28} />
                            <p className="font-bold">{user}</p>
                        </Link>
                            <Link to="/create-task"  >
                                <Button btnColor={"bg-green-200"} btnTitle={"Create Task"}/>
                            </Link>

                            <Link to={'/'} >
                                <Button onClick={()=>{logoutUser()}} btnTitle={"Logout"} btnColor={"bg-purple-200"}/>
                            </Link>

                    </div>
                ):(
                    <Fragment>

                        <p className="font-bold underline"><Link to="/login">Login to start making tasks!</Link></p>
                        
                            <Link to="/login">
                                <Button btnTitle={"Login"} btnColor={"bg-blue-200"}/>
                            </Link>
                            
                            <Link to="/register">
                                <Button btnTitle={"Signup"} btnColor={"bg-blue-200"}/>                
                            </Link>

                    </Fragment>
                    )}
 


                </div>
            </nav>
        </Fragment>
    )

}