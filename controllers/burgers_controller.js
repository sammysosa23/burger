// DEPENDENCIES
var express = require("express");
var router = express.Router();

// IMPORT THE MODEL/BURGER.JS TO USE ITS DB FUNCTION
var burger = require("../models/burger.js")

// ROUTE - GET
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burgers: data });
  });
});

// ROUTE - POST
router.post("/", function (req, res) {
  console.log(req.body);
  burger.insertOne(req.body.name, function () {
    res.redirect("/");
  });
});

// ROUTE - UPDATE
router.put("/:id", function (req, res) {
  console.log(req.body);
  burger.updateOne(req.params.id, function () {
    res.redirect("/");
  });
});

// ROUTE - DELETE
router.delete("/:id", function (req, res) {
  burger.deleteOne(req.params.id, function (result) {
    res.redirect("/");
  });
});

// EXPORT ROUTES TO SERVER.JS
module.exports = router;
