'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define('Tag', {
    nama: DataTypes.STRING,
    task_id:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Tag.belongsTo(models.Task)
      },
      addTag: function(tag, id){

        for (var i = 0; i < tag.length; i++) {
          Tag.create({
            nama: tag[i],
            task_id : id
          }).then((tag) => {
            console.log(`Data Created`);
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      filter: function(Task,tag){
        let name = tag;
        Tag.findOne({
          where: {
            nama: tag
          },
          attributes: ['task_id', 'nama']
        }).then((tag)=>{
          Task.findAll({
            where: {
              id: tag.task_id
            }
          }).then((task)=>{
            for(var i = 0 ; i < task.length ; i++){
              console.log(`${task[i].dataValues.id}. ${task[i].dataValues.content} [ ${name} ]`);
            }
          })
        })
      }
    }
  });
  return Tag;
};
