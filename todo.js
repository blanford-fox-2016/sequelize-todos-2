var models = require('./models')
import{Interface}from'./view.js'
var Task = models.Task
var Tag = models.Tag
// Task.create({
//   content: "test",
//   status: false,
//   createdAt: new Date(),
//   updatedAt: new Date()
// })

// Task.update({
//   status: 0
// },{
//   where: {id: 8}
// }).then(() => {
//   console.log(`update success`);
// })


process.argv.forEach((val, index, array) => {

  if (index === 1) {
    Interface.help()
    // TodoList.Display()
  }
  if(index > 1) {
    if (val==="help") {
      Interface.help()
    }else if(val === "list") {
      // Task.list()
      Interface.list(Task)
    } else if (val === "add" ) {
      Task.addTask(array[3])
      // testing.addTask( array[3] )
      //process.exit(-1)
    }else if(val === "complete"){
      Task.updateComplete( Number(array[3]) )
      //process.exit(-1)
    }else if(val === "uncomplete"){
      Task.uncomplete( Number(array[3]) )
      //process.exit(-1)
    }else if(val === "delete"){
      Task.delete( array[3] )
      //process.exit(-1)
    }else if(val === "task"){
      // Task.checktask( array[3] )
      Interface.printTask(Task, array[3])
      //process.exit(-1)
    }else if(val === "list:outstanding") {
      Interface.sortDataOutstanding(Task, array[3])
    }else if (val === "list:complete") {
      Interface.sortDataComplete(Task, array[3])
    }else if (val === "tag"){
      // testing.addTag(array[3],)
      Tag.addTag(array.splice(4,array.length), array[3])
    }else if(/^filter:\w/.test(val) === true){
      // console.log(array[3]);
      val = val.split(":")
      Tag.filter(Task,val[1])
    }
  }
});
