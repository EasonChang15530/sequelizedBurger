var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var Burger = require("../models/burger.js");

var db = require("../models");
​
// Use Handlebars to render the main index.html page with the burgers in it.
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function(data) {
     res.render("index", {burgers: data}) 
  });
});
​
router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  db.Burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  }).then(function(result) {
    console.log(result);
    res.json(result);
  })
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
