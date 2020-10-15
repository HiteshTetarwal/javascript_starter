

document.querySelector('button').addEventListener('click',(event) => {
    event.target.textContent = 'I was clicked';
})

//track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value); //input listener checked the values on each input just like google
})


















// go through commented code for basic html brushup

//alert('File is attached')

// const myPElements = document.querySelector('p') //just selects the first p tag it encounters
//  myPElements.textContent = 'I am being changed using JS'

// const myPElements = document.querySelectorAll('p') //selects all p tag

// myPElements.forEach((p) => {
//     p.textContent = 'I am changed in loop in js'
//     // p.remove();
// })

// document.title = 'page by hitesh'
// document.getElementById('idOne') = 'change it' //this is not possible

// const myIdElements = document.querySelectorAll('#idOne')

// console.log(myIdElements[0]);

// const myIdElements = document.querySelectorAll('.classOne')

// console.log(myIdElements[0]);

// const myNewPara = document.createElement('p')

// myNewPara.textContent = 'I was added via JS'

// document.querySelector('body').appendChild(myNewPara)