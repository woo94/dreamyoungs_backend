const { Model, DataTypes: Types, Sequelize } = require("sequelize")

module.exports = (sequelize = new Sequelize, DataTypes = Types) => {
    class User extends Model {
        static associate(models) {

        }
    }

    User.init({
        index: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.CHAR(64),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        userDesc: {
            type: DataTypes.TEXT,
            defaultValue: ''
        },
        hasCat: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        {
            sequelize,
            tableName: 'users',
            createdAt: false,
            updatedAt: false
        }
    )

    return User
}