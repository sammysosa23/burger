// IMPORTING MYSQL CONNECTION
var connection = require("../config/connection.js");

// OBJECT FOR ALL SQL STATEMENT FUNCTIONS
var orm = {
  selectAll: function (table, cb) {
    var query = "SELECT * FROM ??;";
    connection.query(query, [table], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (table, colName, colValue, cb) {
    var query = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(query, [table, colName, colValue], function (err, result) {
      if (err) throw err;
      console.log("Success on inserting burger: " + result);
      cb(result);
    });
  },

  updateOne: function (table, colName, colValue, idCol, idValue, cb) {
    var query = "UPDATE ?? SET ?? = ?;";
    connection.query(query, [table, colName, colValue, idCol, idValue], function (err, result) {
      if (err) throw err;
      console.log("Success update: " + result);
      cb(result);
    });
  },

  deleteOne: function (table, idCol, idVal, cb) {
    var query = "DELETE FROM ?? WHERE ?? = ?;";
    connection.query(query, [table, idName, idValue], function (err, result) {
      if (err) throw err;
      console.log("Success on deleting: " + result);
      cb(result);
    })
  }
};

// EXPORT THE ORM TO THE MODEL/BURGER.JS
module.exports = orm
