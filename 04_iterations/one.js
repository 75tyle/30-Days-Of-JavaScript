// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {

    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }    
}

const array = ["flash", "batman", "superman"]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


//  break and continue

// for (let i = 1; i <= 10; i++) {
//     if(i == 5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }


for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${i}`);
    
}