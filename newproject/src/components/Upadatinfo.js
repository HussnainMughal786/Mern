import React, { useEffect } from 'react'
import "../style/Register.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'




const Updateinfo = () => {
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const navigate =useNavigate();
const params=useParams()




//getting data from registeration form to upadation form through edit button
  const getSingleUser = async()=> {
    let result=await fetch(`http://localhost:5000/Single-user/${params.id}`)
    // {
    //     method:"get"
    // })
    result=await result.json();
    console.log(result) 
    setName(result.name)
    setAddress(result.address)
    setEmail(result.email)
    setPassword(result.password)
  };


  useEffect(()=>{
    getSingleUser();
  },[])



  //updating data in upadate user form
  const updateUser =async(e)=>{
    e.preventDefault()
    let result =await fetch(`http://localhost:5000/Update-user/${params.id}`,
    {
        method:"put",
        body: JSON.stringify({ name, address, email, password }),
        headers: {
          "Content-Type": "application/json", 
    }
    })
    result=await result.json();
    console.log("updated",result)
    if(result){
        navigate("/Users")
    }
    

  }

  return (
   <div classname="container  ">
  <div className="container mg d-flex flex-wrap justify-content-center  bootstrap snippets bootdey" >
    <div className="jumbotron text-center" style={{minHeight: 400, height: 'auto'}}>
      <div className="col-md-10 col-md-offset-2">
        <form className="form-horizontal" >
          <div className="form-group text-center">
            <div className="col-sm-10 reg-icon">
              <span className="fa  fa-2x my-3">Update User</span>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" onChange={(e)=>setName(e.target.value)} name='name' value={name} className="form-control"  placeholder="Name" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="text" onChange={(e)=>setAddress(e.target.value)} name='address' value={address} className="form-control"  placeholder="Address" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <input type="email" onChange={(e)=>setEmail(e.target.value)} name='email' value={email} className="form-control"  placeholder="Email;" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10" >
              <input type="text" onChange={(e)=>setPassword(e.target.value)} name='password' value={password} className="form-control"  placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <button   type="submit" onClick={updateUser} className="btn btn-info my-3">
                <span className="glyphicon glyphicon-share-alt" />
                Update
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

export default Updateinfo