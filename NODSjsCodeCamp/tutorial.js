const sum = (num1,num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

// module.exports = sum;

//for multiple exports

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

//instead of exporting all individually, do below

module.exports = {sum: sum, PI : PI , SomeMathObject: SomeMathObject}