console.log("Global scope & Local scope");

let a = 200           //Global scope 
var b = 30            //Avoid using var
const c = 600         //Global scope 
if(true){
    let a = 10                      //Local scope
    var b = 300                     //Avoid using var
    const c = 400                   //Local scope
    // console.log("Local scope: ", a,c);
}
// console.log("Global scope:",a,c);
// console.log("Variable declared using var: ",b);

function one(){
    const username = "sanghpal";

    function two(){
        const website = "www.website.com"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "sanghpal"
    if(username === "sanghpal"){
        const website = "youtube"
        // console.log(username + " " + website);
    }
    // console.log(website);   //this will give error 
}
// console.log(username);  //this will give error



console.log(addOne(5));     //this will not give an error
function addOne(num){
    return num + 1
}


// console.log(addTwo(5));         //this will give an error 
const addTwo = function(num){
    return num + 2
}