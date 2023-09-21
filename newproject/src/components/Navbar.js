import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
 <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
      <Link className="navbar-brand text-light" to="/Ecommerce">Ecommerce</Link>
      <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Users">user-List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact-us">Contact us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About-us">About us</Link>
          </li>
        </ul>
        <Link to="/Register" className='me-2 btn btn-primary'>Register</Link>
        <Link to="/Login" className='btn btn-primary'>Login</Link>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar