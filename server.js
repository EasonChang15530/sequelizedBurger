var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of this application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Serve static content from the "public" directory in this application directory.
app.use(express.static("public"));

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes.
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");
db.sequelize.sync({ force: false }).then(function () {
  // Begin listening to client requests.
  app.listen(PORT, function () {
    // Log (server-side) when server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
