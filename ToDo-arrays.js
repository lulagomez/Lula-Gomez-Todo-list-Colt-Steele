let input = prompt("What do you want to do?")
console.log(input)
let todo = []

while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
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
        let del = parseInt(prompt("What number of the list do you want to delete?"))    
        let todoLng = todo.length
        if (del >= todoLng){
            console.log("You don't have so many thigs to do")
            console.log("**********")
        } else if (!Number.isNaN(del)){
            console.log(`${todo[del]} deleted from list.`)
            console.log("**********") 
            todo.splice(del, 1)
        } else {
            console.log('Invalid index')
            console.log("**********")
        } 
        
            
                
            }
    input = prompt("What do you want to do?")  
    console.log(todo.length) 
        }
console.log('Bye bye!')
    
    



    
