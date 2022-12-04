let input = prompt("What do you want to do?")
console.log(input)
let todo = {
    0: "Wake up"
}
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
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
        let del = parseInt(prompt("What number of the list do you want to delete?"))
        console.log(del)
        if (del >= Object.keys(todo).length){
            console.log("You don't have so many thigs to do")
            console.log("**********")
        } else if (!Number.isNaN(del)){
            for (let i of Object.keys(todo)){
                if (parseInt(i) === del){
                    console.log(`${todo[del]} deleted from list.`)
                    console.log("**********") 
                    delete todo[i]                    
                }                
            }
        } else{
            console.log('Invalid index')
            console.log("**********")
        }
        
    }
    input = prompt("What do you want to do?")
    



    
}