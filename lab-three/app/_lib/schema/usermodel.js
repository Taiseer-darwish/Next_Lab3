import mongoose from "mongoose";

const todosSchema=mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    status:{
        type:String,
        default:"todo"
    }
})


const userModel=mongoose.models.todo|| mongoose.model('todo',todosSchema)

export default userModel