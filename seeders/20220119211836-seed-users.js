'use strict';

const Seq = require("sequelize")
const chance = require("chance").Chance()

const userFactory = (num = 1) => {
  const users = []
  for (let i = 0; i < num; i++) {
    users.push(
      {
        userName: chance.name(),
        userDesc: chance.sentence(),
        hasCat: chance.bool()
      }
    )
  }
  return users
}

module.exports = {
  async up(queryInterface = new Seq.QueryInterface(), Sequelize = Seq) {
    await queryInterface.bulkInsert('users', userFactory(20))
  },

  async down(queryInterface = new Seq.QueryInterface(), Sequelize = Seq) {
    await queryInterface.bulkDelete('users', {})
  }
};
