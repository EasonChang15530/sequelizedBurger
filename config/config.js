require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "sequelize_burgers",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "sequelize_burgers",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line camelcase
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};