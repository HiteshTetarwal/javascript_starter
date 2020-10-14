const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon camera is of ${this.price} $`
    }
}


console.log(cameras.myDes());

//for redux
//const func = () => ({key: 'value'}); //always use round braces