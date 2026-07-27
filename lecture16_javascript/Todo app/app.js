let todo = [];

let req = prompt("please enter your request(add, list, delete, quit)"); 
console.log(req);

while(req !== "quit") {
   

    if(req == "list") {
        console.log("----------------");
        for(i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("----------------");
        

    } else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");

        
    } else if(req == "delete") {
        let index = prompt("please enter the index of task you want to delete");
        todo.splice(index, 1);
        console.log("task added");
    } else {
        console.log("Invalid request");
    }

    req = prompt("Please enter your request(add, list, delete, quit)");
}

console.log("Quitting app");
