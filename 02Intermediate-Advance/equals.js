console.log(2 == 2.0); //gives true
console.log(2 === 2.0); //gives true

let oneStr = '';
let secStr = '';

console.log(oneStr == secStr); //gives true
console.log(oneStr === secStr); //gives true

//for objects

let firstObj = {};
let secondObj = {};

console.log(firstObj == secondObj); //gives true
console.log(firstObj === secondObj); //gives false, because the objects are not same, even though the values are same in each case

let first = {}
let second = first

console.log(first == second); //gives true
console.log(first === second); //gives true because the referencing objects are same in memory this time


// == is equality
// === is identity