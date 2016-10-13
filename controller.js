'use strict';

//write your code here
let models = require('./models')
let todo = models.Todo
let task = models.Task
let argv = process.argv
let param = argv.slice(4,argv.length).join(" ")

switch (argv[3]) {
  case 'add':
    todo.findOne({
      where:{nama:argv[2]},
      attributes:['id','nama']
    }).then(function(data){
      task.create({
        todo_id: data.dataValues.id,
        tugas: param,
        done: false
      }).then(function(){
        console.log("Task added");
      })
    })
    break;
  case 'list':
    todo.findOne({
      where:{nama:argv[2]}
    }).then(function(data){
      task.findAll({
        where:{todo_id:data.dataValues.id},
        attributes:['id','tugas','done']
      }).then(function(task){
        for(var i = 0; i<task.length; i++){
          if (task[i].dataValues.done === false) {
            console.log(`[ ] ${task[i].dataValues.id} | ${task[i].dataValues.tugas}`);
          }else{
            console.log(`[x] ${task[i].dataValues.id} | ${task[i].dataValues.tugas}`);
          }
        }
      })
    })
    break;
  case 'complete':
    todo.findOne({
      where:{nama:argv[2]}
    }).then(function(data){
      task.findAll({
        where:{todo_id:data.dataValues.id},
        attributes:['id','tugas','done']
      }).then(function(temp){
        for(var i=0; i<temp.length; i++){
          if(temp[i].dataValues.id == argv[4]){
            temp[i].update({done:true},{fields:['done']}).then(function(){
              console.log(`Task set to complete`);
            })
          }
        }
      })
    })
    break;
  case 'uncomplete':
    todo.findOne({
      where:{nama:argv[2]}
    }).then(function(data){
      task.findAll({
        where:{todo_id:data.dataValues.id},
        attributes:['id','tugas','done']
      }).then(function(temp){
        for(var i=0; i<temp.length; i++){
          if(temp[i].dataValues.id == argv[4]){
            temp[i].update({done:false},{fields:['done']}).then(function(){
              console.log(`Task set to uncomplete`);
            })
          }
        }
      })
    })
    break;
  case 'delete':
      todo.findOne({
        where:{nama:argv[2]}
      }).then(function(data){
        task.destroy({
          where:{
            id : argv[4]
          }
        }).then(function(data){
          if (data > 0){
            console.log("Data Deleted");
          }else{
            console.log(" Error 304: Invalid ID");
          }
        })
      })
    break;
  default:
    console.log("error");

}
