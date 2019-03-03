// IMPORTING MYSQL CONNECTION
var connection = require("../config/connection.js");

// ==================== DELETE =================== //

// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// }

// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'"
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// }

// ==================== DELETE =================== //

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

    // ==================== DELETE =================== //

    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    // console.log(queryString);

    // connection.query(queryString, vals, function (err, res) {
    //   if (err) {
    //     throw err;
    //   }
    //   cb(res);
    // });

    // ==================== DELETE =================== //
  },

  updateOne: function (table, colName, colValue, idCol, idValue, cb) {
    var query = "UPDATE ?? SET ?? = ?;";
    connection.query(query, [table, colName, colValue, idCol, idValue], function (err, result) {
      if (err) throw err;
      console.log("Success update: " + result);
      cb(result);
    });

    // ==================== DELETE =================== //

    // queryString += " SET ";
    // queryString += objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;

    // console.log(queryString, function (err, res) {
    //   if (err) {
    //     throw err;
    //   }
    //   cb(res);
    // });

    // ==================== DELETE =================== //
  },


  deleteOne: function (table, idCol, idVal, cb) {
    var query = "DELETE FROM ?? WHERE ?? = ?;";
    connection.query(query, [table, idName, idValue], function (err, result) {
      if (err) throw err;
      console.log("Success on deleting: " + result);
      cb(result);
    })
  }

  // ==================== DELETE =================== //

  // - - - - - MIGHT NOT NEED THIS - - - - - //

  // deleteOne: function (table, condition, cb) {
  //   var queryString = "DELETE FROM " + table;
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   connection.query(queryString, function (err, res) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(res);
  //     console.log("Item successfully deleted: " + res);
  //   });
  // }

  // ==================== DELETE =================== //

};

// EXPORT THE ORM TO THE MODEL/BURGER.JS
module.exports = orm
