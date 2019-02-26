var connection = require("../config/connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM " + table +
      connection.query(queryString, function (err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
  },
  insertOne: function (table, colName, ColValue, cb) { },

  updateOne: function (table, colName, colValue, idCol, idValue, cb) { },

  deleteOne: function (table, idCol, idValue, cb) {
    var query = "DELETE FROM ?? WHERE ?? = ?;"
    connection.query(query, [table, idCol, idValue], function (err, result) {
      if (err) throw err;
      console.log("Item successfully deleted: " + result);
    })
  }

};

module.exports = orm
