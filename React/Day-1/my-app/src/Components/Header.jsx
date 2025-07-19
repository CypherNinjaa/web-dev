import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
	return (
		<header className="d-flex bg-dark  justify-content-between">
			<nav className="nav">
				<Link to="/">Home</Link>
				<Link to="/Dashboard">Dashboard</Link>
				<Link to="/About">About</Link>
				<Link to="/user/vikash">Vikash profile</Link>
				<Link to="/user/vikash2">Vikash2 profile</Link>
			</nav>
		</header>
	);
};

export default Header;
