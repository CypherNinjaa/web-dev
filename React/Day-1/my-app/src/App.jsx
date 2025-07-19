// import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Profile from "./Components/Profile";
import Counter from "./Components/Counter";
function App() {
	// const [count, setCount] = useState(0);
	return (
		<>
			{/* <Header />
			<Routes>
				<Route path="/" element={<Home name={"Tata"} model={"Alto"}  />} />
				<Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/user/:username" element={<Profile />} />
			</Routes>

			<h1>hii</h1> */}
			

			{/* <Home name={"Buggati"} model={"xyz"} /> */}
			{/* <Footer /> */}
      <Counter />
		</>
	);
}

export default App;
