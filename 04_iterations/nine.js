// reduce

const myNums = [1,2,3]

// const sum = myNums.reduce( function (acc, currval) {
//     console.log(`acc ${acc} and currval ${currval}`);
    
//     return acc + currval
// }, 3 )
const sum = myNums.reduce( (acc, currval) => acc+currval,0)

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "modbile Dev",
        price: 12000
    },
    {
        itemName: "data science",
        price: 3000
    }
]

const price = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(price);
