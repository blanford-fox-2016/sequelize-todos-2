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

      getList: function() {
        List.findAll({
          where: {TodoId: 1}
        }).then(function (list) {
            for (var i = 0; i < list.length; i++) {
              var status = list[i].status
              console.log(`${list[i].id}. [${status == true ? "x" : " "}] ${list[i].list} `)
            }
        });
      }
    }
  });
  return List;
};
