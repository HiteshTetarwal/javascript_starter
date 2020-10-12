let myTodos = {
    day:'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(meet = 0){
        this.meetings = this.meetings + meet
        // console.log(this); //this keyword refers to all the properties of current object
    },

    summary: function(){
        return `Your have ${this.meetings} today`
    }
}

// let myTodosTwo = {
//     day:'Monday',
//     meetings: 0,
//     meetDone: 0,

//     addMeeting: function(){
//         console.log(this);  //this keyword refers to all the properties of current object
//     }
// }
 


myTodos.addMeeting(2)

console.log(myTodos.summary());