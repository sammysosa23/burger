// DEPENDENCIES
// IMPORTING THE ORM.JS TO CREATE FUNCTIONS THAT WILL INTERACT WITH THE DATABASE
var orm = require('../config/orm.js');

// EXPORT THE DB FUNCTIONS TO THE CONTROLLER/BURGER_CONTROLLER.JS
module.exports = burger;

var burger = {
  // SELECTS ALL BURGERS IN THE DATABASE
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // INSERTS ONE RECORD INTO THE BURGERS TABLE
  insertOne: function (burgerName, cb) {
    orm.insertOne("burgers", "burger_name", burgerName, function (res) {
      cb(res);
    });
  },

  // INSERTS ONE RECORD INTO THE BURGERS TABLE
  updateOne: function (idNum, cb) {
    orm.updateOne("burgers", "devoured", "1", "id", idNum, function (res) {
      cb(res);
    });
  },
  // UPDATES BURGER ENTRY
  deleteOne: function (idNum, cb) {
    orm.deleteOne("burgers", "id", idNum, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;

