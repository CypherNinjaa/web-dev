import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/CustomButton";

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
			<h3>learning backend from Aniket Sir</h3>
			<Button name="register" Click={goToRegister} />
			<Button name="login" Click={goToLogin} />
            <h6></h6>
		</div>
	);
};

export default Landing;
