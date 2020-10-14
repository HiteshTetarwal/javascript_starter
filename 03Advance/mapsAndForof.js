var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
}

var marry = {
    name: 'I am marry',
    age: 23,
    isActive: true,
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false,
}

let users = new Map()

//console.log(typeof users); //gives type object but it is Map

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

// console.log(users);
// console.log(users.size); //not possible with objects only possible with map
// console.log(users.get('sam'));
// console.log(users.keys());
// console.log(users.values());

//forof loop
for (const key of users.keys()) {
    console.log(key);
}

for (const value of users.values()) {
    console.log(value.name);
}

for (const [key,value] of users.entries()) {
    console.log(key+'=>'+value.name);
}

//foreach loop
users.forEach((value,key) => console.log(key+'=>'+value.name))

var arrOfArr = [['one','1'],['two','2'],['three','3']]

var newMap = new Map(arrOfArr) //it will automatically make the array of array into a map

console.log(newMap)