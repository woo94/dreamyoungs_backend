'use strict';
// const { QueryInterface, DataTypes, Op } = require('sequelize')
const Seq = require('sequelize')

module.exports = {
  async up(queryInterface = new Seq.QueryInterface(), Sequelize = Seq) {
    await queryInterface.bulkDelete('users', {
      userName: {
        [Seq.Op.eq]: null
      }
    })
    await queryInterface.changeColumn('users', 'userName', {
      type: Sequelize.DataTypes.CHAR(64),
      allowNull: false
    })
  },

  async down(queryInterface = new QueryInterface(), Sequelize = Seq) {
    await queryInterface.changeColumn('users', 'userName', {
      type: Sequelize.DataTypes.CHAR(64),
      allowNull: true
    })
  }
};
