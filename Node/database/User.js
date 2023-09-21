import mongoose from "mongoose";

let Schema = new mongoose.Schema(
    {
        name :{
            type: String,
            required :true
        },
        address:{
            type: String,
            required: [true,"please enter your address"],
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }


    },
    {timestaps:true}
)
const User=mongoose.model("user",Schema)
export default User;