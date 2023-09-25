import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDb from './database/db.js'
import authRouter from './routers/authRouter.js'
import morgan from 'morgan'


// configuration of dot env file
dotenv.config()

//Database connection 
connectDb();


// rest object
const app = express();

// converting plain data / text to json format
app.use(express.json())

app.use(morgan("dev"))

app.use("/api/auth", authRouter)


// app.get("/",(req,res)=>{
//     res.send({message: "welcome to MERN"})
// })


const port = process.env.PORT || 8003

// listening server
app.listen(port,()=>{
    console.log(`Server is started on PORT ${port}`.bgBlue.white)
})


