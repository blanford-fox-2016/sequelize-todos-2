'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.hasMany(models.List)
      },

      getTodo: function() {
        Todo.findAll().then(function (todo) {
            for (var i = 0; i < todo.length; i++) {
              console.log(`${todo[i].id}. ${todo[i].name} `)
            }
        });
      },

      addTodo: function(value) {
        Todo.create({
          name: value.todo
        }).catch(function(err){
          console.log(err.message);
        })
      },

      deleteTodo: function(id) {
        Todo.destroy({
          where: {id: id}
        }).then(function () {
          console.log(`Todo id ${id} deleted`)
        })
      }
    }
  });
  return Todo;
};
