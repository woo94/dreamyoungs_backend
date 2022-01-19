'use strict';
const { QueryInterface, DataTypes } = require('sequelize')

module.exports = {
  async up(queryInterface = new QueryInterface(), Sequelize = S) {
    await queryInterface.createTable('users', {
      index: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: DataTypes.CHAR(64)
      },
      userDesc: {
        type: DataTypes.TEXT
      },
      hasCat: {
        type: DataTypes.BOOLEAN
      }
    })
  },

  async down(queryInterface = new QueryInterface(), Sequelize) {
    await queryInterface.dropTable('users')
  }
};
