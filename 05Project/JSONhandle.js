const student = {
    name: 'John',
    age : 23,
}
// stringify to convert to string

const studentInString = JSON.stringify(student);

// most api's are in string format, so we will be working on converting that string into json object again

localStorage.setItem('student', studentInString); //since local storage always accepts just strings

// conversion of string to json object now

const toJSONStudent = JSON.parse(studentInString);
