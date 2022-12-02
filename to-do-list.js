let input = prompt("What do you want to do?")
console.log(input)
let todo = {
    0: "Wake up"
}
while (input.toLowerCase() !== "q"){
    if (input === "new"){
        let addTo = prompt("What do you want to add?");
        let inTodo = Object.keys(todo).length;
        console.log(inTodo);
        todo[inTodo] = addTo;
        console.log(`${addTo} added to list.\n**********`)
        for (let num of Object.keys(todo)){
            console.log(`${num}: ${todo[num]}`)
            
        }
        console.log("**********")
    }
    else if (input === "list"){
        console.log()
    }
    input = prompt("What do you want to do?")


    
}