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