// MYSQL CONNECTION
var mysql = require("mysql");

// MYSQL DB CONNECTION INFO
var connection = mysql.createConnection({
  host: 'localhost',
  port: 8282,
  user: 'root',
  password: '',
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

module.exports = connection;



