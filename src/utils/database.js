const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "coursesapp",
  username: "postgres",
  host: "localhost",
  port: "5432",
  password: "matimati",
  dialect: "postgres",
  logging: false
});

module.exports = db;