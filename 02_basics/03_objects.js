// const tinderUser = new Object() //singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sanghpal"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    fullname:{
        userfullname:{
            firstname:"sanghpal",
            lastname:"kamble"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4);
// console.log(obj4 === obj1);

console.log(tinderUser);
console.log(Object.keys(tinderUser));   //intresting
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedin"));