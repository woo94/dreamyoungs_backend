require('dotenv').config()

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
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: 'secret',
        database: DATABASE,
        host: 'localhost',
        dialect: 'mysql'
    }
}