const { Sequelize } = require("sequelize")
const config = require("./config/config")

require('dotenv').config()

console.log(config[process.env.NODE_ENV])

module.exports = new Sequelize(config[process.env.NODE_ENV])