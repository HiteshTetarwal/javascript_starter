// console.log('5' - 5); //treats everthing as number now
// console.log('5' + 5); //treats everything as string now

//avoid above practices

const giveType = typeof '5'

const adder = true + 5 //prints 6 (true is treated as 1)
const adder2 = false + 5 //print 5 (flase is treated as 0)


const loginDetails = []
//login for getting details from DB

const loginID = loginDetails[0]

if (loginID) {
    console.log('Allow user to login');
}
else{
    console.log('Auth failed');
}

//values that js interpret as false:
// false
// 0
// '' (if there is anything inside these string quotes it becomes true)
// null
// undefined