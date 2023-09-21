import React from 'react'
import "../style/Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <div>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <br />
  <br />
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0">
          <div className="card p-4">
            <div className="card-body">
              <h1>Login</h1>
              <p className="text-muted">Sign In to your account</p>
              <div className="input-group mb-3">
                <span className="input-group-addon"><i className="fa fa-user" /></span>
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <div className="row">
                <div className="col-6">
                  <button type="button" className="btn btn-primary px-4">Login</button>
                </div>
                <div className="col-6 text-right">
                  <button type="button" className="btn btn-link px-0">Forgot password?</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
            <div className="card-body text-center">
              <div>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link  to="/Register" type="button" className="btn btn-primary active mt-3">Register Now!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login