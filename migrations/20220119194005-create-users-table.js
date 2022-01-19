'use strict';
const Seq = require('sequelize')

module.exports = {
  async up(queryInterface = new Seq.QueryInterface(), Sequelize = Seq) {
    await queryInterface.createTable('users', {
      index: {
        type: Sequelize.DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      userName: {
        type: Sequelize.DataTypes.CHAR(64)
      },
      userDesc: {
        type: Sequelize.DataTypes.TEXT
      },
      hasCat: {
        type: Sequelize.DataTypes.BOOLEAN
      }
    })
  },

  async down(queryInterface = new Seq.QueryInterface(), Sequelize) {
    await queryInterface.dropTable('users')
  }
};
