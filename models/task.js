'use strict';

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    content: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Task.hasMany(models.Tag)
      },
      addTask: function(newData){
        Task.create({
          content: newData,
          status: false
        }).then((task) => {
          console.log(`Data Created`);
        }).catch((err) => {
          console.log(err);
        })
      },
      updateComplete:function(id){
        Task.update({
          status: true
        },{
          where: {id: id}
        }).then(() => {
          console.log(`update success`);
        })
      },

      uncomplete: function(id){
        Task.update({
          status: false
        },{
          where: {id: id}
        }).then(() => {
          console.log(`task uncompleted`);
        })
      },
      delete: function(id){
        Task.destroy({
          where: {
            id:id
          }
        }).then(()=>{
          console.log("your data deleted");
        })
      }
    }
  });
  return Task;
};
