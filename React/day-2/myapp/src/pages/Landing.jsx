import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
	const navigate = useNavigate();

	const goToRegister = () => {
		navigate("/register");
	};
	const goToLogin = () => {
		navigate("/login");
	};
	return (
		<div>
			<h3>welcome to my webpage</h3>
			<Button name="register" Click={goToRegister} />
			<Button name="login" Click={goToLogin} />
		</div>
	);
};

export default Landing;
