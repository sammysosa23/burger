// DEPENDENCIES
var express = require("express");
var router = express.Router();

// IMPORT THE MODEL/BURGER.JS TO USE ITS DB FUNCTION
var burger = require("../models/burger.js")

// ROUTE - GET
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    res.render("index", { burgers: data });

    // ==================== DELETE =================== //
    // var hbsObject = {
    //   burger: data
    // };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
    // ==================== DELETE =================== //
  });
});

// ROUTE - POST
router.post("/", function (req, res) {
  console.log(req.body);
  burger.insertOne(req.body.name, function () {
    res.redirect("/");
  });
});

// ==================== DELETE =================== //

// router.post("/api/burgers", function (req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//       req.body.burger_name, req.body.devoured
//     ], function (result) {
//       res.json({ id: result.insertId });
//     });
// });
// ==================== DELETE =================== //

// ROUTE - UPDATE
// router.put("/:id", function (req, res) {
//   console.log(req.body);
//   burger.updateOne(req.body.name, function () {
//     res.redirect("/");
//   });
// });

router.put("/:id", function (req, res) {
  console.log(req.body);
  burger.updateOne(req.params.id, function () {
    res.redirect("/");
  });
});

// ==================== DELETE =================== //

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id + " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRow == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// ==================== DELETE =================== //

// ROUTE - DELETE
// router.delete("/:id", function (req, res) {
//   burger.deleteOne(req.params.id, function (result) {
//     res.redirect("/");
//   });
// });

// ==================== DELETE =================== //

// router.delete("api/burger/:id", function (req, res) {
//   var condition = "id + " + req.params.id;

//   burger.delete(condition, function (result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// ==================== DELETE =================== //


// EXPORT ROUTES TO SERVER.JS
module.exports = router;




