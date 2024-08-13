import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";



export default function CreateTask(){

    const {register,handleSubmit} = useForm()


    const {createTask} = useTasks()


    return(
        <Fragment>
            <div className="min-h-screen flex justify-center items-center">
                <form onSubmit={handleSubmit((data)=>{createTask(data);console.log(data)})} className="w-full max-w-md flex flex-col justify-center align-middle">
                    <input {...register("titleTask")} placeholder="Task title"
                        className="w-full my-2 rounded-md p-2"/>

                    <textarea rows={5} {...register("descriptionTask",{required:true})} placeholder="Task description"
                        className="w-full my-2 rounded-md p-2"/>

                    <button type="submit" className="rounded-md bg-blue-400 p-3 ">Create</button>    
                </form>
            </div>
        </Fragment>
    )


}