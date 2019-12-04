// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burgers" model that matches up with DB
var Burgers = sequelize.define("burgers", {
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN,
  created_at: Sequelize.DATE
});

// CREATE TABLE burgers(
// 	id int AUTO_INCREMENT NOT NULL,
// 	name VARCHAR(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT false,
// 	PRIMARY KEY (id)
// );

// Syncs with DB
Burgers.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burgers;