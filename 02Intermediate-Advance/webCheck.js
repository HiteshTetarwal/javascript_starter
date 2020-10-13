let userEmail = 'lco123'
let password = '1234'


// console.log(password.length);

// //for lowercase
// console.log(userEmail.toLowerCase());
// console.log(userEmail.trim());


let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true;
    }
    else {
        return false;
    }
}

let passChecker = function(pass){
    if ((pass.includes(1234)) && (pass.length > 8)) {
        return true;
    }
    else {
        return false;
    }
}