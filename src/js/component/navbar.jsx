import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/home.css";


export const Navbar = () => {
	return (
		
			<nav className="navbar navbar-light bg-dark border-bottom border-warning border-5">
				<ul className="navbar-nav mx-auto">
					<Link className="navbar-brand" to="/">
						<img src={logo} className="logo" alt=""/>
					</Link>

				</ul>
				
		</nav>
	
		
	);
};
