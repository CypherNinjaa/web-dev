import "./App.css";
import Landing from "./Pages/Landing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} /> 
			</Routes>
		</>
	);
}

export default App;
