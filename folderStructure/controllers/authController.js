
import Users from "../Models/userModel.js"
import { hashPassword } from "../Helpers/authHelper.js"



const authController=async(req,res)=>{
        // previous method 
// let result= await Users(req.body)
// result=await result.save();
// res.send(result)

try {
    const{name,email,address,phone,password}=req.body

    // check validation user dont leave the field empty 
    if(!name){
        res.send({"message":"Please enter your name"})
    }
    if(!email){
        res.send({"message":"Please enter your email"})
    }
    if(!address){
        res.send({"message":"Please enter your address"})
    }
    if(!phone){
        res.send({"message":"Please enter your phone number"})
    }
    if(!password){
        res.send({"message":"Please enter password"})
    }

    // check validation if email already exist than dont register
    let userExist =await Users.findOne({email})  //email:email key:value =email
    if(userExist){
        res.status(200).send({
            success:true,
            message:"email already exist"
        })
    }

    //hashing password export from authHelpers
    const hashedPassword=await hashPassword(password);
    let user=await Users({name,email,address,phone,password:hashedPassword}).save()
    res.status(201).send({
        success:true,
        message:"you registered successfully",user
    })    
} 
catch (error) {
    console.log("error")
    res.status(500).send({
        success:false,
        message:"Error in registration",error
    })
}


}





export default authController