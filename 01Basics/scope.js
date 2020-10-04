let iAmGlobal = 'someValue'

if(true){
    let iamLocal = 'someMOreValue'
    var iamLocal2 = 'anotherLocal' //can be accessed outside scope
    console.log(iAmGlobal);
    console.log(iamLocal);
}

console.log(iamLocal2);
console.log(iAmGlobal);
//console.log(iamLocal); //will give error because of local scope with let keyword