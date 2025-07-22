import React from "react";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleUsernameChange = (value) => {
		console.log(value);
		setUsername(value);
	};
	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic validation
		if (!username || !email || !password) {
			alert("Please fill in all fields");
			return;
		}

		console.log("Form submitted:", { email, username, password });
		localStorage.setItem(
			"userData",
			JSON.stringify({ email, username, password })
		);

		// Navigate to home page with username
		navigate("/home", { state: { username: username } });
	};
	return (
		<div>
			<h2>Register Page</h2>
			<p>Please fill in the form to create an account.</p>
			<form onSubmit={handleSubmit}>
				<InputBox
					type={"text"}
					inputname={"username"}
					change={(e) => handleUsernameChange(e.target.value)}
					value={username}
				/>
				<InputBox
					type={"email"}
					inputname={"email"}
					change={(e) => handleEmailChange(e.target.value)}
					value={email}
				/>
				<InputBox
					type={"password"}
					inputname={"password"}
					change={(e) => handlePasswordChange(e.target.value)}
					value={password}
				/>
				<Button type={"submit"} name={"Register"} Click={handleSubmit} />
			</form>
		</div>
	);
};

export default Register;
