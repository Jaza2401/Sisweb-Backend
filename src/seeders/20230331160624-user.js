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
   await queryInterface.bulkInsert('Users',[
    {
      name: 'Gustavo',
      phone: '6621382843',
      email: 'eufanfeif@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Javier',
      phone: '6621335843',
      email: 'eufagrokoif@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alejandro',
      phone: '6621372867',
      email: 'hefifieif@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mario',
      phone: '6621356493',
      email: 'ivmmror@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
