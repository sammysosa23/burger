// MYSQL CONNECTION
var mysql = require("mysql");
var connection;
// require("dotenv").config();

// USING JAWSDB TO CONFIGURE CONNECTION
if (process.env.JAWSDB_URL) {
  console.log("I'm utilizing JAWSDB");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // MYSQL DB CONNECTION INFO
  console.log("Using local DB");
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
  // INIT MYSQL CONNECTION
  connection.connect(function (err) {
    if (err) {
      console.log("Error connecting to MySQL: " + err.stack);
      return;
    }
    console.log("MySQL connected as id " + connection.threadId);
  });
}

// EXPORT CONNECTION FOR OUR ORM
module.exports = connection;




