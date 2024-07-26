// Array

const arr = [1,2,3,4,5,6]
const arr2 = arr
// arr2.push(7)
// arr2.pop()
// arr2.unshift(9)
// console.log(arr2);
// arr2.shift()
// console.log(arr2);
// console.log(arr2.includes(9))
// console.log(arr2.indexOf(3))

// const newArr = arr2.join()
// console.log(arr2)
// console.log(newArr)
// console.log(typeof newArr);

// slice, splice

// console.log("A", arr2);
// const my1 = arr2.slice(1,3);
// console.log(my1)
// console.log("B", arr2);
// const my2 = arr2.splice(1,3)
// console.log("c",arr2);
// console.log(my2);

const marvel_heroes = ["spiderman","ironman", "hulk"];
const dc_heroes = ["batman", "flash", "superman"];
// marvel_heroes.push(dc_heroes)
// const new_superheroes = marvel_heroes.concat(dc_heroes)
// console.log(new_superheroes)

// const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes)

// const another_array = [1,2,3,[4,5,6],7,8,[9,10,[11,12]],13];
// const flatArray = another_array.flat(2)
// console.log(flatArray);

// console.log(Array.isArray("Sanghpal")); 
// console.log(Array.from("Sanghpal")); 
// console.log(Array.from({name: "Sanghpal"})); //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))