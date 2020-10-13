// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('Sammy'));




//arrow function -type 1

const sayHello = (name) => {
    return `Hey there, ${name} !`
}

console.log(sayHello('Sammy'));



//arrow function -type 2

const sayHelloagain = (name) => `Hey there, ${name} !`

console.log(sayHelloagain('Sammy'));





//example with trello

const todos = [{
    title: 'Buy Bread',
    isDone: true,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'Record youtube videos',
    isDone: true,
}]

//using array filter funtion
const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone);

//just print titles
thingsDone.forEach((todo) => console.log(todo.title))

