import mongoose from 'mongoose'


const OrderSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    order:{
        type:String,
        default:"There was no order made by this user"
    }
})


export default mongoose.model('Orders',OrderSchema)