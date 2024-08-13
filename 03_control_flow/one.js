// if

let isLoggedIn = true
temprature = 4

// if(temprature >= 40){
//     console.log("temprature is greater than 40");
// }else{
//     console.log("temprature is less than 40");
// }
// console.log("execute");

// < , > , == , <= , >= , != , === , !==

let score = 400;

// if(score > 100){
//     let power = "fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


const balance = 1000

// if(balance > 500) console.log("test"); //implicit scope 


// if(balance < 500){
//     console.log('less than 500');
// }else if(balance == 500){
//     console.log('balance is 500');
// }else if(balance > 500){
//     console.log('greater than 500');
// }else{
//     console.log("balance can't be shown");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course.");
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User Logged in");
}