import Task from '../models/task.model.js'
import Order from '../models/order.model.js'



export const getTasks = async (req,res)=>{
    const allUserTasks = await Task.find({user:req.userDecoded.id}).populate('user')

   res.json({allUserTasks})

    
}

export const getOneTask = async (req,res)=>{
    const foundTask = await Task.findById(req.params.id)
    if(!foundTask) return res.send(404)

    res.send(foundTask)

}

export const newOrder = async(req,res)=>{
    console.log(req.userDecoded)
    const {order} = req.body

    

    const newOrder = new Order ({
        customer: req.userDecoded.id,
        order: order
    })

    await newOrder.save()
    res.json(newOrder) 
}


export const viewOrders = async (req,res)=>{
    const orderHistory = await Order.find({customer:req.userDecoded.id}).populate('customer')
    res.json(orderHistory)
}


export const editOrder = async (req,res) =>{
    
    try{

        const target = req.params.id
        const newInfo = req.body.order

        if (!newInfo){
            res.status(400).json({error:"No se envio nada"})
        }else{

            await Order.findByIdAndUpdate(target,newInfo,{new:true})
    
            res.json({alert:"Edited Successfully"})
        }    

    }catch(e){
        res.status(500).json(e)
    }
    
}

export const createTasks = async (req,res)=>{
    const {titleTask,descriptionTask,date} = req.body
    console.log(req.userDecoded.id)

    const newTask = new Task({
        title:titleTask,
        description:descriptionTask,
        date:date,
        user: req.userDecoded.id
    })
    
    console.log(newTask)

    const savedTask = await newTask.save()
    res.json(savedTask)

}


export const editTasks = async (req,res)=>{

    const foundTask = await Task.findByIdAndUpdate(req.params.id,req.body,{new: true})
    console.log(foundTask)
    if(!foundTask) return res.sendStatus(404)

    return res.status(200).json({message:"Tarea actualizada"})


}


export const deleteTasks = async (req,res)=>{
    console.log(req.params.id)
    const foundAndDeteleTask = await Task.findByIdAndDelete(req.params.id)
    if(!foundAndDeteleTask) return res.send(404).json({message:"not found"})

    else res.sendStatus(204)
}

