// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   // automatically converts "2" to typeof number

// console.log(null > 0);  
// console.log(null == 0);
// console.log(null >= 0);
/* 
The reason is that an equality check == and comparison < > >= <=  work differently.
Comparison converts null treating it as 0. 
Thats why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log("2" == 2) //
console.log("2" === 2)