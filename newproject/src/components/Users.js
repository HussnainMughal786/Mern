import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
const Users = () => {

  const [userList,setUserList]=useState([])


  //Api for getting user data
  const getUserData=async()=>{
    let result=await fetch("http://localhost:5000/get-user")
    result= await result.json();
    console.log("_____",result)
    setUserList(result)

}
  //Api for getting user data
  // const params =useParams()
  const userDelete =async(id)=>{
    console.log("id",id)
     let result =  await fetch(`http://localhost:5000/delete-user/${id}`,{
      method:"Delete"
     })
     result= await result.json()
     if(result){
      alert("user deleted")
      getUserData();
     }
     else{
      alert('nor deleted')
     }
  }

  // Api for searching data 
  const userSearch=async(e)=>{
    let key=e.target.value
    console.log(key)
    if(key){
      let result=await fetch(`http://localhost:5000/search/${key}`)
      result= await result.json();
      if(result){
      setUserList(result)
      }
    }
    else{
      getUserData()
    }
    

  }
  

useEffect(()=>{
    getUserData();
},[])

  return (
  <>
    
  <div> className='container 'style={'{'}{'{'}marginTop:"100px"{'}'}{'}'}&gt;
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous" />
  <div className="container">
    <br />
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <form className="card card-sm">
          <div className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body" />
            </div>
            {/*end of col*/}
            <div className="col">
              <input onChange={userSearch} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
            </div>
            {/*end of col*/}
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">Search</button>
            </div>
            {/*end of col*/}
          </div>
        </form>
      </div>
      {/*end of col*/}
    </div>
  </div>
</div>

<div className='container'>
    <table className="table  table-hover" >
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">password</th>
      <th scope="col"> </th>

    </tr>
  </thead>
  <tbody>
    {
      userList.map((user,ind)=>{
        return(
          <tr>
    <th scope="row">{ind+1}</th>
      <td></td>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>  
      <td><Link to={`/Update/${user._id}`} className='btn btn-success me-2'  ><i class="fas fa-edit"></i></Link>
      <button className='btn btn-danger'onClick={()=>userDelete(user._id)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>  


    </tr>
    )

      } )
    }
  </tbody>
</table>
</div>   
    </>
  )
}

export default Users