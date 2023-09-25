import express from 'express';
import userModel from '../models/userModel.js';
import JWT from"jsonwebtoken"
import { comparePassword, hashPassword } from '../helpers/authHelper.js';

//user rgistration 
 export const authController = async(req,res)=>{ 
try {

    const {name, email, password, phone, address} = req.body

    // if user failed to provide his / her name
    if(!name){
        res.send({"message": "Please enter your name"})
    }
    // if user failed to provide his / her email
    if(!email){
        res.send({"message": "Please enter your email"})
    }
    // if user failed to provide his / her password
    if(!password){
        res.send({"message": "Please enter your password"})
    }
    // if user failed to provide his / her phone
    if(!phone){
        res.send({"message": "Please enter your phone"})
    }
    // if user failed to provide his / her address
    if(!address){
        res.send({"message": "Please enter your address"})
    }

    // checking if a user is already in Database
    let existingUser = await userModel.findOne({email})

    if(existingUser){
        res.status(200).send({
            success: true,
            "message":"Email already exists",
        })
    }


    // pause khatam 
    const hashedPassword = await hashPassword(password);

    let user = await userModel({name, email, password: hashedPassword, phone, address}).save()

    res.status(201).send({
        success :true ,
        "message": "You registered successfully",
        user
    })
    
} catch (error) {
    console.log(error)
    res.status(500).send({
        success: false,
        message: "Error in Registration",
        error
    })

}    


}

export const logInController =async(req,res)=>{

    try {
        const {email,password}=req.body;
        //if user failed to provide any property
        if(!email || !password){
             return res.status(400).send({
                success:false,
                "message":"enter the email or password"})
        }

       let user =await userModel.findOne({email})
        //if user is not in data base
       if(!user){
        return res.status(400).send({
            success:false,
            "message":"no such user available first register yourself",
            user
        })
       }
       //comparing password and hashed password 
       const match =await comparePassword(password,user.password)
       if(!match){
        return res.status(401).send({
            success:false,
            "message":"invalid password ",
            match
        })
       }
    //    if user login successfully than give him a token 

    const token =await JWT.sign({_id: user._id},process.env.JWT_KEY,{expiresIn:"60s"})
       res.status(200).send({
        success:true,
        "message":"Loged in successfully",
        user:{
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,            
        },
        token
       })


    } catch (error) {
        console.log("Error in log In");
        res.status(500).send({
            success:false,
            "message":"Error in login",
            error
        })
    }

}
export const demoController=(req,res)=>{
    res.send("access granted")
} 





