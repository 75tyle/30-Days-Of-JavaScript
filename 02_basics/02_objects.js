// singleton //objects which are created using constructor



// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "Sanghpal",
    "full name": "Sanghpal Kamble",
    location: "mumbai",
    [mySym]: "Key2",
    email: "sanghpal@gmail.com",
    age: 18,
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"],
}

// console.log(JSuser.name);
// console.log(JSuser["name"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "sanghpal@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "sanghpal@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello, world");
}

JSuser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`);
}
// console.log(JSuser.greeting)
console.log(JSuser.greetingTwo());