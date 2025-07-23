const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("school", "root", "9199", {
	host: "localhost",
	dialect: "mysql",
	port: 3307,
	logging: console.log, // Use console.log function instead of true
	// OR logging: false, // To disable logging completely
});

const connectToDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.log("Unable to connect to the database:", error);
		throw error;
	}
};

module.exports = { sequelize, connectToDatabase };
