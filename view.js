"use strict"

class System{
 static mainMenu(){
   console.log(`=======================================`);
   console.log(`            Welcome to Todo js`);
   console.log(`=======================================`);
   console.log(`Type following sentence to get start : `);
   console.log(`$ node mytodo.js (type todo name) help`);
   console.log(`$ node mytodo.js (type todo name) list`);
   console.log(`$ node mytodo.js (type todo name) add (type new task)`);
   console.log(`$ node mytodo.js (type todo name) delete (type spesific task id)`);
   console.log(`$ node mytodo.js (type todo name) complete (type spesific task id)`);
   console.log(`$ node mytodo.js (type todo name) uncomplete (type spesific task id)`);
 }

 static help(){
   console.log(`=======================================`);
   console.log(`            Welcome to Todo js`);
   console.log(`=======================================`);
   console.log(`========================== Help Menu ===================`);
   console.log(`$ node mytodo.js (type todo name) help >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> to view help`);
   console.log(`$ node mytodo.js (type todo name) list >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> to see all task`);
   console.log(`$ node mytodo.js (type todo name) add (type new task) >>>>>>>>>>>>>>>>>>>>> to add new task`);
   console.log(`$ node mytodo.js (type todo name) task (type spesific task id) >>>>>>>>>>>> to see selected task`);
   console.log(`$ node mytodo.js (type todo name) delete (type spesific task id) >>>>>>>>>> to delete selected task`);
   console.log(`$ node mytodo.js (type todo name) complete (type spesific task id) >>>>>>>> to see completed task`);
   console.log(`$ node mytodo.js (type todo name) uncomplete (type spesific task id) >>>>>> to see uncomplete task`);
 }

 static clearScreen(){
   for(var i=0; i<30; i++){
     console.log(`\n`);
   }
 }
}

export default System
