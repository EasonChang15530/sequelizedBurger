// Import MySQL connection.
var connection = require("../config/connection.js");

// * Create the methods that will execute the necessary MySQL commands in the controllers. 

// Helper function for SQL syntax.

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in obj) {
    var value = obj[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if string with spaces, add quotations (Big Mac => 'Big Mac')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Big Mac'} => ["name='Big Mac'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    // SELECT * FROM burgers;
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        return res.status(500).end();
      }
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {
    // INSERT INTO burgers(name) VALUES("Big Mac")
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        return res.status(500).end();
      }

      cb(result);
    });
  },
  update: function (table, objColVals, condition, cb) {
    // UPDATE burgers SET Name = "Cheese Steak" WHERE id = 1
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    // DELETE FROM burgers WHERE id = 3
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;