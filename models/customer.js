module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: DataTypes.STRING
  });

  // Customer.associate = function(models) {
  //   // Associating Customer with Burgers
  //   // When an Customer is deleted, also delete any associated Burgers
  //   Customer.hasMany(models.Burger, {
  //     onDelete: "cascade"
  //   });
  // };

  return Customer;
};
