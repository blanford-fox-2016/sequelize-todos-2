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
      where:{nama:argv[2]}
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
      task.findOne({
        where:{todo_id:data.dataValues.id},
        attributes:['id','tugas','done']
      }).then(function(task){
        for(var i = 0; i<task.length; i++){
          console.log(`[ ] ${task[i].dataValues.id} | ${task[i].dataValues.tugas}`);
        }
      })
    })
  default:
    console.log("error");

}
