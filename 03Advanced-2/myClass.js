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

const john = new User('John','Tetarwal',50)

john.editName('Hitesh Kumar')

console.log(john.getFullName());

