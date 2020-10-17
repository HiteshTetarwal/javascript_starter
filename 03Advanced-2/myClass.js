class User{
    constructor(firstname,lastname,credits){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credits;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname} is my full name with credits ${this.credit}`; 
    }

    editName(newName){
        const myName = newName.split(' ')
        this.firstname = myName[0]
        this.lastname = myName[1]
    }
}

class Teacher extends User {
    //child of User class

    //empty constructor will give error in child class, super() should be used
    constructor(firstname, lastname, credits, subject ){ //can have extra parameters too other than parent class
        super(firstname, lastname, credits)
        this.subject = subject;
    }

    //method overriding
    getFullName() {
        return `I have my name ${this.firstname} and I teach ${this.subject}`;
    }

}


// const john = new User('John','Tetarwal',50)

const john = new Teacher('John','Tetarwal',50 , 'Python') //this will also instead of USer object in line 24



john.editName('Hitesh Kumar')

//method overriding

console.log(john.getFullName()); //this will run the child class method and this is method overriding

