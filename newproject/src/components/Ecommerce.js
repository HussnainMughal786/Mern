import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Ecommerce.css"
const Ecommerce = () => {

	  return (
    <>
    <header class="header-area overlay">
    <nav class="navbar navbar-expand-md navbar-dark">
		<div class="container">
			
			
			<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
				<span class="menu-icon-bar"></span>
			</button>
			
			{/* <div id="main-nav" class="collapse navbar-collapse">
				<ul class="navbar-nav ml-auto">
					<li><Link to="/" class="nav-item nav-link active">Home</Link></li>
					<li><Link to="/AboutUs" class="nav-item nav-link">About Us</Link></li>
					<li><Link to="/Contactus" class="nav-item nav-link">Contact</Link></li>
                    <li><Link to="/Register" class="nav-item nav-link">Register</Link></li>
                    <li><Link to="/Users" class="nav-item nav-link">Users List</Link></li>

				</ul>
			</div> */}
		</div>
	</nav>
	
	<div class="banner">
		<div class="container">
			<h1>Welcome </h1>
			<p>Register her.</p>
			<Link to="/Register" class="button button-primary">Register</Link>
		</div>
	</div>
</header>

    </>
  )
}

export default Ecommerce