// immediataly invoked function expression

(function func(){
    //named iife
    console.log(`DB Connnected`);
})();

(()=>{
    //simple iife
    console.log(`DB Connected two`);
})();

((name)=>{
    console.log(`DB Connected to ${name}`);
})('frontend')