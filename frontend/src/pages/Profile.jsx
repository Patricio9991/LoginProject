import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"



export default function Profile(){

    const {taskList,setTaskList,getAllUserTasks} = useTasks()
    
    useEffect(()=>{
        getAllUserTasks()
    },[])
    


    // setTaskList(taskList.filter((task)=>{task.id !== task._id}))

    return(
        <Fragment>
            <div className="">
                <h1 className="text-3xl">This is your profile</h1>
                <div className="mt-4 flex flex-row flex-wrap justify-center mx-8">
                
                    {taskList.length > 0 ? (
                        taskList.map((task) => (
                            <div key={task._id} className="px-2 w-full sm:w-auto">
                                <TaskCard key={task._id} task={task} />
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-full">No tasks available</p>
                    )}
                
            </div>
            </div>
        </Fragment>
    )
}