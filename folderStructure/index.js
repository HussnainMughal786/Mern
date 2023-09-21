import  express  from "express";
import colors from "colors"
import dotEnv from "dotenv"
import dbConnection from "./dataBase/db.js";
import authRouter from "./Routers/authRouter.js";

// res Object 
const app=express();
//connect db
dbConnection();
// env configuration 
dotEnv.config();

app.use(express.json());

app.use("/api/auth",authRouter)

//server 
const  Port= process.env.port || 7000

app.listen(Port,()=>{
    console.log(`hello server ${Port} from ${process.env.Mode}`.bgBlue)
})