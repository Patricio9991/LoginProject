import { createContext,useContext,useState } from "react";
import axios from "../api/axios.config.js";


const TaskContext = createContext()


export const useTasks = ()=>{
    const context = useContext(TaskContext)
    if(!context) throw new Error("Error de contexto")

    return context
}


export function TaskProvider({children}){

    const [taskList,setTaskList] = useState([])
    const [taskErros,setTaskErros] = useState([])

    const createTask = async (dataTask)=>{
        try {
            const res = await axios.post('/api/create-task',dataTask)
            console.log(res)
            taskList.push(res.data)
            
        } catch (error) {
            console.log(error)
            setTaskErros(error)
        }

    }

    const getAllUserTasks = async ()=>{
        const res = await axios.get('/api/allTasks')
        return res
    
    }


    const deleteOneTask = async(taskID)=>{
        try {
            const res = await axios.delete(`/api/tasks/${taskID}`,taskID)
            return res
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <TaskContext.Provider value={{taskList,setTaskList,createTask,getAllUserTasks,deleteOneTask}}>
            {children}
        </TaskContext.Provider>
    )
}
