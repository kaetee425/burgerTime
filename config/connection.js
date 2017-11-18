var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burger_db"
});

connection.connect(function(err){
	if (err) {
		console.log("error conencting: " + err.stack);
		return;
	} 
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;