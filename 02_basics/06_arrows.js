const user = {
    name: "sanghpal",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.name}, welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this);

// const func = function(){
//     let username = "Sanghpal"
//     console.log(this.username);
// }

// const func = ()=>{
//     let username = "Sanghpal"
//     console.log(this.username);
// }

// func()

// const arrowFunc = (num1,num2)=>{
//     return num1 + num2;
// }

// const arrowFunc = (num1,num2)=>  num1 + num2;   //implicit return

// const arrowFunc = (num1,num2)=>  (num1 + num2)

const arrowFunc = (num1,num2)=>  ({name:"hitesh"})
console.log(arrowFunc(3,4));
