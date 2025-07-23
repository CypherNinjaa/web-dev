const { sequelize, connectToDatabase } = require("./config/db");
const express = require("express");
const app = express();
const PORT = 3000;
const Users = require("./models/Users");


app.get("/", (req, res) => {
	res.send("Hello vikash");
});

// Start the server first, then try to connect to database
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

connectToDatabase()
	.then(() => {
		console.log("Database connected successfully!");

		return sequelize.sync();
	})
	.then(() => {
		console.log("Database tables synced successfully!");
	})
	.catch((error) => {
		console.error("Database connection failed:", error.message);
		console.log("Server is still running without database connection");
	});
