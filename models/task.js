'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    tugas: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    todo_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.belongsTo(models.Todo)
      }
    }
  });
  return Task;
};
