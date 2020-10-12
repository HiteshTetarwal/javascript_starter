const days = ['Mon','Tue','Wed','Fri','Sat']

// let sayHello = function(day){
//     console.log(`Greeting message for user on ${day}`);
// }

// days.forEach(sayHello)


days.forEach(function(day,index){
    console.log(`Greeting message for user on day ${index+1} : ${day}`);
})