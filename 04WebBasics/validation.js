function myValidation(){
    let myValue = document.getElementById('myform').value;

    if (isNaN(myValue) || myValue<1 || myValue > 20) {
        console.log('Not a valid input');
    } else {
        console.log('This is cool!');
    }
}