// MYSQL CONNECTION
var mysql = require("mysql");

// MYSQL DB CONNECTION INFO
var connection = mysql.createConnection({
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

// EXPORT CONNECTION FOR OUR ORM
module.exports = connection;

// JUST IN CASE IT NEEDS TO HANDLE A DISCONNECT

// function handleDisconnect() {
//   connection = mysql.createConnection(connection);

//   connection.connect(function (err) {
//     if (err) {
//       console.log("error when connecting to db: ", err);
//       setTimeout(handleDisconnect, 2000);
//     }
//   });
//   connection.on('error', function (err) {
//     console.log("db error", err);
//     if (err.code === "PROTOCOL_CONNECTION_LOST") {
//       handleDisconnect();
//     } else {
//       throw err;
//     }
//   });
// }
// handleDisconnect();



