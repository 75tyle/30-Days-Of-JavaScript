// forEach()

const coding = ['js','rb','py','cpp']
coding.forEach( function (item){
    // console.log(item);
})

// coding.forEach( (val) => {
//     // console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'javascript',
        LanguageFileName: 'js'
    },
    {
        languageName: 'java',
        LanguageFileName: 'java'
    },
    {
        languageName: 'python',
        LanguageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})