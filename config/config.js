require('dotenv').config()
const { ConnectionError } = require('sequelize')

const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    DATABASE
} = process.env

module.exports = {
    development: {
        username: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: DATABASE,
        host: MYSQL_HOST,
        dialect: 'mysql',
        retry: {
            max: 6,
            match: [
                ConnectionError
            ],
            backoffBase: 1000,
            backoffExponent: 2
        }
    },
    test: {
        username: 'root',
        password: 'secret',
        database: DATABASE,
        host: 'localhost',
        dialect: 'mysql',
        retry: {
            max: 6,
            match: [
                ConnectionError
            ],
            backoffBase: 1000,
            backoffExponent: 2
        }
    }
}