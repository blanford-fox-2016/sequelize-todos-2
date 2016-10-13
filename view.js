export class Interface {
  static list(Task){
    Task.findAll().then((task, err) => {
      for(var i = 0 ; i < task.length ; i++){
        console.log(`${task[i].dataValues.id}. [ ${task[i].dataValues.status === true ? 'X' : ''} ] ${task[i].dataValues.content}`);
      }
    })
  }

  static help(){
      console.log("---------------------");
      console.log("1. node todo.js help ");
      console.log("2. node todo.js add <task_content>");
      console.log("3. node todo.js task <task_id>");
      console.log("4. node todo.js delete <task_id> ");
      console.log("5. node todo.js complete <task_id>");
      console.log("6. node todo.js uncomplete <task_id");
      console.log("7. node todo.js list");
      console.log("8. node todo.js list:outstanding <asc | desc>");
      console.log("9. node todo.js list:complete <asc | desc>");
      console.log("10. node todo.js tag <task_id> <tag name, ..>");
      console.log("11. node todo.js filter:<tag name>");
      console.log("------------------------------");
  }

  static printTask(Task,id){
    Task.findOne({
      where:{
        id : id
      }
    }).then((data)=>{
      console.log(`Task_id : ${data.dataValues.id} status: [ ${data.dataValues.status == true ? 'x' : ''} ]  content :${data.dataValues.content}`)
    })
  }

  static sortDataOutstanding(Task, id){
    (typeof id === "undefined") ? id = 'asc': '';
    // console.log(id)
    Task.findAll({
      where: {
        status: false
      },
      order: '"updatedAt" ' + id
    }).then((data) => {
      for(var i = 0 ; i < data.length ; i++){
        console.log(`${data[i].dataValues.id}. [ ${data[i].dataValues.status === true ? 'X' : ''} ] ${data[i].dataValues.content}`);
      }
    })
  }

  static sortDataComplete(Task, id){
    (typeof id === "undefined") ? id = 'asc': '';
    // console.log(id)
    Task.findAll({
      where: {
        status: true
      },
      order: '"updatedAt" ' + id
    }).then((data) => {
      for(var i = 0 ; i < data.length ; i++){
        console.log(`${data[i].dataValues.id}. [ ${data[i].dataValues.status === true ? 'X' : ''} ] ${data[i].dataValues.content}`);
      }
    })
  }

}
