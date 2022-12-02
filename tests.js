let todo = {
    0: "Wake up",
    1: "qué tal"
}
let inTodo = Object.keys(todo).length
console.log(inTodo)
todo[inTodo] = "hola"
console.log(todo)