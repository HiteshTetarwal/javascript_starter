// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
//  // <h1></h1>  <-- insert Hello World! in this h1 tag

//  h.appendChild(myValue)
//  document.querySelector('h1').appendChild(h)

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)


    if (item == '') {
        // add a p tag and assign a value of "Enter your todo"
        return false
    } else {
        li = document.createElement('li');
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        var label = document.createElement('label');
        label.setAttribute('for','item')


        ul.appendChild(label)
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0])
        
        input.value = '';
    }
}