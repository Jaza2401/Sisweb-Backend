'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   queryInterface.bulkInsert('Orders',[
    {
      number: 23,
      date: new Date(),
      status: 'entregado',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    },
    {
      number: 30,
      date: new Date(),
      status: 'en espera',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      number: 45,
      date: new Date(),
      status: 'entregado',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 4
    },
    {
      number: 56,
      date: new Date(),
      status: 'entregado',
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
