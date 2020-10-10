//event module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',()=>{
    console.log('Tutorial Event has occured')
})

eventEmitter.emit('tutorial')

//with parameter
eventEmitter.on('tutorial_param',(num1,num2)=>{
    console.log(num1+num2);
})

eventEmitter.emit('tutorial_param',1,2)


class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina')

christina.on('name',()=>{
    console.log('my name is '+christina.name);
})

pedro.on('name',()=>{
    console.log('my name is '+pedro.name);
})

pedro.emit('name');
christina.emit('name');













//basics 


// const tutorial = require('./tutorial');
// console.log(tutorial);

// console.log(tutorial.PI);
// console.log(tutorial.sum(1,1)) //while accessing multiple exported variables

// console.log(new tutorial.SomeMathObject()); //created new object of the class