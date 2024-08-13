import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        default: "This one has no description!"
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User' //referencia al nombre schema user (mongoose.model("User",userSchema))
    }

},{timestamps:true})

export default mongoose.model('Tasks',taskSchema)