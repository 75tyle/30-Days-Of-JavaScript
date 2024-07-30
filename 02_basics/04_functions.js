function sayMyName(){
    console.log("sanghpal");
}
// sayMyName()


function addTwoNum(num1, num2){
    // let result = num1 + num2
    return num1+num2
}

const result = addTwoNum(3, 4)
// console.log("Result: ",result);

// function isloggedin(name){
//     if(name === undefined){
//         console.log("please enter ur name");
//     }else{
//         return `${name} just loggegd in`
//     }
// }

// function isloggedin(name){
//     if(!name){
//         console.log("please enter ur name");
//         return
//     }
//     return `${name} just loggegd in`
// }

function isloggedin(name = "sam"){
    if(!name){
        console.log("please enter ur name");
        return
    }
    return `${name} just loggegd in`
}

// console.log(isloggedin("sanghpal")); //overwrite


// function calculateCartPrice(...num1){
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,400,500));


const user = {
    name:"sanghpal",
    price:"999"
}

function handleObject(anyobject){
    return `The username is ${anyobject.name} and the price is ${anyobject.price}`
}

// console.log(handleObject(user));

// console.log(handleObject({
//     name:"sanghpal",
//     price:"999"
// }));


const myArray = [100,200,300]

function getSecondArray(getArray){
    return getArray[1];
}

// console.log(getSecondArray(myArray));
console.log(getSecondArray([100,600,300,400]));