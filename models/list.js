'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    list: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    TodoId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        List.belongsTo(models.Todo)
      },

      getList: function(id) {
        List.findAll({
          where: {TodoId: id}
        }).then(function (list) {
            for (var i = 0; i < list.length; i++) {
              var status = list[i].status
              console.log(`${list[i].id}. [${status == true ? "x" : " "}] ${list[i].list} `)
            }
        });
      },

      addList: function (value) {
        List.create({
          list: value.list,
          status: value.status,
          TodoId:value.todo_id
        }).catch(function (err) {
          console.log(err.message)
        })
      },

      deleteList: function (id) {
        List.destroy({
          where: {
            id: id
          }
        }).then(function () {
          console.log(`List id ${id} deleted`)
        })
      },

      completedList: function (id) {
        List.update({
          status: 1
        }, {
          where: {
            id: id
          }
        }).then(function () {
          console.log(`List id ${id} completed`)
        })
      },

      uncompletedList: function (id) {
        List.update({
          status: 0
        }, {
          where: {
            id: id
          }
        }).then(function () {
          console.log(`List id ${id} completed`)
        })
      }
    }
  });
  return List;
};
