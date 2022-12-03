let input = prompt("What do you want to do?")
console.log(input)
let todo = []
while (input.toLowerCase() !== "quit"){
    if (input.toLowerCase() === "new"){
        let addTo = prompt("What do you want to add?");
        todo.push(addTo.toLowerCase())
        console.log(`${addTo} added to list.`)
        console.log("**********")    
    }
    else if (input.toLowerCase() === "list"){
        for (let num of todo){
            console.log(`${todo.indexOf(num)}: ${num}`)    
        }
        console.log("**********")
    }
    else if (input.toLowerCase() === "delete"){
        let del = prompt("What number of the list do you want to delete?")    
            console.log(`${todo[del]} deleted from list.`)
            console.log("**********") 
            todo.splice(del, 1)
                
            }
    input = prompt("What do you want to do?")   
}
    
    
    



    
