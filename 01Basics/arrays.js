const numbers = ['One','Two','Three','Four','Five','Six']

//start
numbers.shift()
console.log(numbers.shift()); //shows number which is deleted
console.log(numbers);

numbers.unshift('Zero') //reinserts new element at start of array
console.log(numbers);

//end
numbers.pop()
console.log(numbers.pop()); //prints element which is being deleted from end
console.log(numbers);

numbers.push('NewNumber')
console.log(numbers);


//middle
numbers.splice(2,1,'Something') //start at postion 2 and delete 1 element and inserts 'Something' in place of it
console.log(numbers);