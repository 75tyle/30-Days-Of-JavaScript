const gameName = new String("Sanghpal")


// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
// console.log(gameName.length)

console.log(gameName.indexOf('h'))
const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-7,4)
// console.log(anotherString);

const newStringOne = "    sanghpal    "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://sanghpal.com/sanghpal%20kamble"

console.log(url.replace('%20', '-')); 
console.log(url.includes('fghjk'));

