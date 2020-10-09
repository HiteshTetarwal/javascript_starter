let sayHello = function() {
    console.log("Greetings message for user");
    console.log("Hey user");
}

console.log(sayHello);
sayHello() //this will print the function

let hellospeaker = function(name) {
    console.log(`Hi i am ${name}, I want to say hello.`);
}

hellospeaker('Hitesh')

//returning funtions

let numadder = function(num1,num2){
    let added = num1 + num2
    return added
}

console.log(`The sume of 2 and 3 is ${numadder(2,3)}`);