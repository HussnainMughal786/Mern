import mongoose from "mongoose";
import colors from "colors"
const dbConnection =()=>{
    try {
        mongoose.connect(`mongodb://localhost:27017/LMS`)
        console.log(`DataBase connected Successfully `.bgGreen)
        
    } catch (error) {
        console.log("Error in data base connection ".bgRed)
    }
}


export default dbConnection;