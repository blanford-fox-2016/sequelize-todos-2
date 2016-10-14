'use strict';

//write your code here

var models = require('./models')
import View from './view.js'
var Todo = models.Todo
var List = models.List
var argv = process.argv


class TodoTask {
  constructor(todo) {
    this.todo = todo
  }

  static viewHelp(){
    View.printHelp()
  }
}

class ListTask {
  constructor(list,status,todo_id) {
    this.list = list
    this.status = status
    this.todo_id = todo_id
  }
}


if (typeof argv[2] === "undefined") {
  View.printHelp()
}


argv.forEach((val, index) => {

  let indexTask = argv[3]

  val = val.toLowerCase()
  // index = searchIndex(indexTask)

  if(val == "help"){
    View.printHelp()
  }
  else if(val == "view_todo"){
    if(argv[3]) {
      List.getList(argv[3])
    }
    else {
      Todo.getTodo()
    }
  }

  else if (val == "add_todo") {
      // console.log(argv.length);
      var dataBaru = ""
      var temp = {}

      if (typeof argv[3] == "undefined") {
        console.log("Data harus di isi");
      }else {
        for (var i = 3; i < argv.length; i++) {
          dataBaru += argv[i] + (i < argv.length-1 ? " " : "")
        }
        temp = new TodoTask(dataBaru)
        Todo.addTodo(temp)
        console.log(`Added "${dataBaru}" to your TODO list`);
      }
  }

  else if (val == "delete_todo") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      Todo.deleteTodo(argv[3])
    }
  }

  else if (val == "add_list") {
    // console.log(argv.length);
    var dataBaru = ""
    var temp = {}

    if (typeof argv[3] == "undefined" || typeof argv[4] == "undefined" ) {
      console.log("Data harus di isi");
    }else {
      for (var i = 4; i < argv.length; i++) {
        dataBaru += argv[i] + (i < argv.length-1 ? " " : "")
      }
      temp = new ListTask(dataBaru, false, argv[3])
      List.addList(temp)
      console.log(`Added "${dataBaru}" to your TODO list`);
    }
  }

  else if (val == "delete_list") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      List.deleteList(argv[3])
    }
  }


  else if (val == "complete_list") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      List.completedList(argv[3])
    }
  }

  else if (val == "uncomplete_list") {
    if (typeof argv[3] == "undefined") {
      console.log("Data harus di isi");
    }else {
      List.uncompletedList(argv[3])
    }
  }

  else if (val == "add_tag") {
    var dataBaru = ""

    if (typeof argv[3] == "undefined" || typeof argv[4] == "undefined") {
      console.log("Data harus di isi");
    }else {
      for (var i = 4; i < argv.length; i++) {
        dataBaru += argv[i] + (i < argv.length-1 ? " " : "")
      }
      List.addTag(dataBaru, argv[3])
    }
  }

  else if (val.split(":")[0] == "filter") {
    var dataBaru = val.split(":")[1]

    if (typeof argv[2] == "undefined") {
      console.log("Data harus di isi");
    }else {
      List.searchTag(dataBaru)
    }
  }

  else if (val == "list:outstanding") {
    List.getOutstanding()
  }

  else if (val == "list:completed") {
    List.getCompleted()
  }

})

