const { Sequelize } = require("sequelize")
const config = require("./config/config")

require('dotenv').config()

module.exports = new Sequelize(config[process.env.NODE_ENV])