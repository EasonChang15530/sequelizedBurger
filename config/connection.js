// Dependencies
var mysql = require("mysql");
require("dotenv").config();

// var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.mysql_pass,
//     database: "burgers_db"
//   });
// }

// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;

// Creates mySQL connection using Sequelize.
var Sequelize = require("sequelize");
var sequelize = new Sequelize("sequelize_burgers", "root", "process.env.mysql_pass", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export the connection for other files to use
module.exports = sequelize;