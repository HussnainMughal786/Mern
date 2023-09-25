import mongoose from "mongoose";

const connectDb = async() =>{
    try {
        const con = await mongoose.connect("mongodb://127.0.0.1:27017/NEWLMS")
        console.log(`Database connected on ${con.connection.host}`.bgMagenta.white)

    } catch (error) {
        console.log(`Error in DB Connection`.bgRed.white)
    }
}

export default connectDb;