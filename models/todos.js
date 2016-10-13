'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todos = sequelize.define('Todos', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todos.hasMany(models.Task)
      }
    }
  });
  return Todos;
};
