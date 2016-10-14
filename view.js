
class View {
  constructor() {

  }

  static printHelp() {
    console.log("============HELP============\n");
    console.log("node todo.js #will call help");
    console.log("node todo.js help");
    console.log("node todo.js view_todo");
    console.log("node todo.js view_todo <list_id>");
    console.log("node todo.js add_todo <text>");
    console.log("node todo.js delete_todo <todo_id>");
    console.log("node todo.js add_list <todo_id> <text>")
    console.log("node todo.js delete_list <list_id>");
    console.log("node todo.js complete_list <list_id>");
    console.log("node todo.js uncomplete_list <list_id>");
  }
}

export default View
