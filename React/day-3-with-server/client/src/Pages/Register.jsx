import axios from "axios";
import InputBox from "../Components/InputBox";
import Button from "../Components/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
	const [email, setEmail] = useState("");
	const [name, setname] = useState("");
	const [password, setPassword] = useState("");
	const [mobile_no, setMobileNo] = useState("");

	const navigate = useNavigate();

	const handlenameChange = (value) => {
		console.log(value);
		setname(value);
	};
	const handleEmailChange = (value) => {
		setEmail(value);
	};
	const handlePasswordChange = (value) => {
		setPassword(value);
	};
	const handleMobileNoChange = (value) => {
		setMobileNo(value);
	};
	const handleSubmit = async () => {
		try {
			console.log(name, email, password, mobile_no);
			const data = {
				name,
				email,
				password,
				mobile_no,
			};
			console.log(data);
			const response = await axios.post(
				"http://localhost:3000/api/users/register",
				data
			);
			console.log("response", response);
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<h2>Register Page</h2>
			<p>Please fill in the form to create an account.</p>
			<form>
				<InputBox
					customtype={"text"}
					inputname={"name"}
					customvalue={name}
					change={(e) => handlenameChange(e.target.value)}
				/>
				<InputBox
					customtype={"email"}
					inputname={"email"}
					customvalue={email}
					change={(e) => handleEmailChange(e.target.value)}
				/>
				<InputBox
					customtype={"password"}
					inputname={"password"}
					customvalue={password}
					change={(e) => handlePasswordChange(e.target.value)}
				/>
				<InputBox
					customtype={"text"}
					inputname={"mobile_no"}
					customvalue={mobile_no}
					change={(e) => handleMobileNoChange(e.target.value)}
				/>
				<Button name={"Register"} Click={handleSubmit} />
			</form>
		</div>
	);
};

export default Register;
