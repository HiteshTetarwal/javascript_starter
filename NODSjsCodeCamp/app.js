const tutorial = require('./tutorial');
console.log(tutorial);

console.log(tutorial.PI);
console.log(tutorial.sum(1,1)) //while accessing multiple exported variables

console.log(new tutorial.SomeMathObject()); //created new object of the class