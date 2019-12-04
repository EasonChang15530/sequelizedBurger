
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
​
  return Burger;
};
// CREATE TABLE burgers(
// 	id int AUTO_INCREMENT NOT NULL,
// 	name VARCHAR(255) NOT NULL,
// 	devoured BOOLEAN DEFAULT false,
// 	PRIMARY KEY (id)
// );
