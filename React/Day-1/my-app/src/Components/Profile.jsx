import React from "react";
import { useParams } from "react-router-dom";
const Profile = () => {
	const { username } = useParams(); // Assuming you want to use a username from the URL params
	console.log(username);

	const userData = {
		vikash: { name: "Vikash Kumar", age: 21, city: "Patna" },
		vikash2: { name: "Vikash ", age: 30, city: "Bhopal" },
	};
	const user = userData[username];

	// Handle case when user is not found
	if (!user) {
		return (
			<div>
				<h5>User not found!</h5>
				<p>Username: {username}</p>
			</div>
		);
	}

	return (
		<div>
			<h5>Username - {username}</h5>
			<h5>Name - {user.name}</h5>
			<h5>Age - {user.age}</h5>
			<h5>City - {user.city}</h5>
		</div>
	);
};

export default Profile;
