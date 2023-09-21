import React from 'react'
import "../style/Register.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Register = () => {
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


const Navigate= useNavigate()
 
  

  const submit = async (e) => {
    e.preventDefault();
    // console.log(name,address,email,password)
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, address, email, password }),
      headers: {
        "Content-Type": "application/json", 
      },
    });
  
    result = await result.json(); 
    console.log("------", result);
    if(result){
     Navigate("/Users")
    }
    // name("")
    // address("")
    // email('')
    // password('')
  };

  

  return (
   <div classname="container  ">
  <div className="container mg d-flex flex-wrap justify-content-center  bootstrap snippets bootdey" >
    <div className="jumbotron text-center" style={{minHeight: 400, height: 'auto'}}>
      <div className="col-md-10 col-md-offset-2">
        <form className="form-horizontal" >
          <div className="form-group text-center">
            <div className="col-sm-10 reg-icon">
              <span className="fa fa-user fa-3x my-3">Sign up</span>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" onChange={(e)=>setName(e.target.value)} name='name' value={name} className="form-control" id="name" placeholder="Name" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" onChange={(e)=>setAddress(e.target.value)} name='address' value={address} className="form-control" id="inputEmail3" placeholder="Address" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="email" onChange={(e)=>setEmail(e.target.value)} name='email' value={email} className="form-control" id="Username" placeholder="Email;" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10" >
              <input type="text" onChange={(e)=>setPassword(e.target.value)} name='password' value={password} className="form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <button   type="submit" onClick={submit} className="btn btn-info my-3">
                <span className="glyphicon glyphicon-share-alt" />
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>                                      
</div>

  )
}

export default Register