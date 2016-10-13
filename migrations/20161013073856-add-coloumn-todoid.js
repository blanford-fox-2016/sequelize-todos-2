'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Tasks', "todo_id", {
      type:Sequelize.INTEGER,
      references:{
        model:'Todos',
        key:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn('Tasks', "todo_id")
  }
};
