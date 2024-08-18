// const coding = ['js','rb','py','cpp']

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//     return num > 4
// })

const newNums  = []
myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})

// console.log(newNums);

const colors = [
	{
		color: "red",
		value: "#f00",
        price: 300
	},
	{
		color: "green",
		value: "#0f0",
        price: 200
	},
	{
		color: "blue",
		value: "#00f",
        price: 250
	},
	{
		color: "cyan",
		value: "#0ff",
        price: 50
	},
	{
		color: "magenta",
		value: "#f0f",
        price: 100
	},
	{
		color: "yellow",
		value: "#ff0",
        price: 350
	},
	{
		color: "black",
		value: "#000",
        price: 400
	}
];


let userColors = colors.filter( (clr) => clr.color === "cyan")


userColors = colors.filter( (clr) => {
    return clr.price >= 300 && clr.value === '#000'
})
console.log(userColors);
