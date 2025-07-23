const Users = require("../models/Users");

const UserController = {
	CreateUser: async (req, res) => {
		try {
			const { name, email, password, mobile_no } = req.body;
			console.log(name, email, password, mobile_no);

			const NewUser = await Users.create({
				name,
				email,
				password,
				mobile_no,
			});
			res.status(201).json(NewUser);
		} catch (error) {
			console.log("Error: ", error);
			res.status(500).json(error);
		}
	},
};
module.exports = UserController;
