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


//basics 


// const tutorial = require('./tutorial');
// console.log(tutorial);

// console.log(tutorial.PI);
// console.log(tutorial.sum(1,1)) //while accessing multiple exported variables

// console.log(new tutorial.SomeMathObject()); //created new object of the class