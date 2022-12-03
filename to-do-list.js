let input = prompt("What do you want to do?")
console.log(input)
let todo = {
    0: "Wake up"
}
while (input.toLowerCase() !== "quit"){
    if (input.toLowerCase() === "new"){
        let addTo = prompt("What do you want to add?");
        let inTodo = Object.keys(todo).length;
        todo[inTodo] = addTo.toLowerCase();
        console.log(`${addTo} added to list.`)
        console.log("**********")    
    }
    else if (input.toLowerCase() === "list"){
        for (let num of Object.keys(todo)){
            console.log(`${num}: ${todo[num]}`)    
        }
        console.log("**********")
    }
    else if (input.toLowerCase() === "delete"){
        let del = prompt("What number of the list do you want to delete?")
        for (let i of Object.keys(todo)){
            if (i === del){
                console.log(`${del} deleted from list.`)
                console.log("**********") 
                delete todo[i]
                
            }
            
        }
    }
    input = prompt("What do you want to do?")
    



    
}