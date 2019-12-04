var express = require("express");

var router = express.Router();

var db = require("../models");

// Use Handlebars to render the main index.html page with all burgers in it.
router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(function (dbBurger) {
      res.render("index", { burgers: dbBurger })
    });
});

// POST route for saving a new burger
router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  }).then(function (dbBurger) {
    res.json(dbBurger);
  })
});

// DELETE route for deleting burger
router.delete("/api/burgers/:id", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbBurger) {
    res.json(dbBurger);
  });
});

// PUT route for updating burger
router.put("/api/posts", function (req, res) {
  db.Burger.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function (dbBurger) {
      res.json(dbBurger);
    });
});
// Export routes for server.js to use.
module.exports = router;
