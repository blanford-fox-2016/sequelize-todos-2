'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tasks', [
      { tugas:"membaca buku-bukan",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas:"membaca kitab suci",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { tugas:"mengasah pisau",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Tasks', null, {})
  }
};
