// const userEmail = 'sanghpal.ai'
// const userEmail = ''
const userEmail = []



// if(userEmail){
//     console.log(`User email is ${userEmail}`);
// }else{
//     console.log(`User has no email`);
// }

// falsy values
// false , 0 , -0 ,  BigInt 0n , "" , null , undefined , NaN


// truthy
// "0", "false", " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing operator(??): null / undefined

let val;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 10

console.log(val1);


// terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");