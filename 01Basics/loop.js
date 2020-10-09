const days = ['Mon','Tue','Wed']

console.log(days[0]);


//method 1
days.forEach(function (day,index){
    console.log(`Starts with ${index+1} -- ${day}`);
})

//method 2
for(let index = 0; index < days.length; index++){
    const element = days[index];
    console.log(element);
}