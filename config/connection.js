var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
 	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 	connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    databse: 'burger_db'
  });
}


connection.connect(function(err){
	if (err) {
		console.log("error conencting: " + err.stack);
		return;
	} 
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;