import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();
	const username = location.state?.username || "Guest";

	useEffect(() => {
		document.title = "Home Page";
	}, []);

	return (
		<div>
			<h2>Welcome {username}!</h2>
			{/* <p>Registration successful! You are now logged in.</p> */}
		</div>
	);
};

export default Home;
