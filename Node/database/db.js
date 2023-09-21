import mongoose from "mongoose";
import colors from 'colors'



const dbConnection=()=>{
    try{
    mongoose.connect("mongodb://127.0.0.1:27017/userprofile");
    console.log("Data base connect successfully".bgGreen)
    }
    catch(error){
        console.log("Error in data base connection".bgRed)
    }

}

export  default dbConnection;