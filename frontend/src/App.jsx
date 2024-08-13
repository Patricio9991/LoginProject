import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"
import { TaskProvider } from "./context/TaskContext.jsx"

import PrivateRoutes from "./pages/PrivateRoutes.jsx" 

import Navbar from "./components/Navbar.jsx"

import RegisterPage from "./pages/registerPage"
import LogInPage from "./pages/LogInPage"
import CreateTask from "./pages/CreateTask.jsx"
import Profile from "./pages/Profile.jsx"
import PageLayout from "./pages/PageLayout.jsx"



export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            
            <Route path="/" element={<PageLayout/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LogInPage/>}/>
            
            <Route element={<PrivateRoutes/>} >
            
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/create-task" element={<CreateTask/>}/>

            </Route>

          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>

  )
}