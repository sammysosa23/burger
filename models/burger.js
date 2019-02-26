// DEPENDENCIES
var orm = require('../config/orm.js');

var burger = {
  // SELECTS ALL BURGERS IN THE DATABASE
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // INSERTS ONE RECORD INTO THE BURGERS TABLE
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // UPDATES BURGER ENTRY
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objcolVals, condition, function (res) {
      cb(res);
    });
  },
  // DELETES BURGER ENTRY
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;