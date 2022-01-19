'use strict';
const { QueryInterface, DataTypes, Op } = require('sequelize')

module.exports = {
  async up(queryInterface = new QueryInterface(), Sequelize) {
    await queryInterface.bulkDelete('users', {
      userName: {
        [Op.eq]: null
      }
    })
    await queryInterface.changeColumn('users', 'userName', {
      type: DataTypes.CHAR(64),
      allowNull: false
    })
  },

  async down(queryInterface = new QueryInterface(), Sequelize) {
    await queryInterface.changeColumn('users', 'userName', {
      type: DataTypes.CHAR(64),
      allowNull: true
    })
  }
};
