import { MdOutlineDoneOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useTasks } from "../context/TaskContext";
import { useEffect,useState } from "react";


export default function TaskCard({task}){

    const {taskList,setTaskList,deleteOneTask} = useTasks()

    const creationDate = new Date(task.date)
    const formattedDate = `${creationDate.toLocaleDateString('en-US', { month: 'long' })} ${creationDate.getDate()}, ${creationDate.getFullYear()}`

    const [terget,setTarget] = useState("")

    useEffect(()=>{
        const newTaskList = taskList.filter((taskParam)=>{return taskParam._id !== terget})
        setTaskList(newTaskList)
    },[terget])



    return(
        <div>
            <li key={task._id} className="bg-sky-500 w-[300px] h-[350px] my-2 flex flex-col p-4 rounded-md">

                <div className="flex flex-col items-center pb-4">
                    <h2 className="text-4xl font-bold">{task.title}</h2>
                    <span >{formattedDate}</span>
                </div>

                <div className="w-full h-[150px] break-words overflow-auto text-xl px-2">
                    <p className="whitespace-normal">{task.description}</p>
                </div>
                <div className="flex flex-row justify-evenly">
                    <MdOutlineDoneOutline size={60} className="hover:text-green-500"/>
                    <RiDeleteBinLine onClick={()=>{deleteOneTask(task._id);setTarget(task._id)}} size={60} className="hover:text-red-500"/>
                </div>
            </li>
        </div>
    )
}