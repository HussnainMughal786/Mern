import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"


// this fuc checks is the user is valid means have same token 
export const requiredSignIn=async(req,res,next)=>{
try {
    let decode= jwt.verify(req.headers.Authorization,process.env.JWT_KEY)
    req.user=decode
    next();//after verification move to  next function
    
} catch (error) {
    res.status(401).send({
        success:false,
        "message":"Unauthorized ",
        error
    })
}
}
//assignin the role if not admin than move to next 
export const isAdmin=async(req,res,next)=>{
    let user =await userModel.findById(req.user._id)

    if(user.role!== 1){
        return res.send("Unauthorized access / limited access")
    }else{
        next()
    }


}