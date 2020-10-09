const days = ['Mon','Tue','Wed']

console.log(days[0]);


//method 1
days.forEach(function (day,index){
    console.log(`Starts with ${index+1} -- ${day}`);
})

//method 2 --forward
for(let index = 0; index < days.length; index++){
    const element = days[index];
    console.log(element);
}

//method 2 --backward
for(let index = days.length-1; index >=0; index--){
    const element = days[index];
    console.log(element);
}