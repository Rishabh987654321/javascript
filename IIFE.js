//Immediately invoked function Expression(IIFE)
//sometimes we need a function that has to be executed immediately
//There can be two reason to declare a IIFE function
//1) To prevent a particular function from being polluted by any global scope variable 
//2) To prevent a particular function from being accessed from outside the function
(function run(){
    console.log(`DB connected`);
    
})();//always end an IIFE with a semicolon to tell that function has ended otherwise the next function will throw an error


//arrow function as IIFE
(()=>{
    console.log(`DB connected`)
})();//at last () is provided to immediately invoke the function

((name)=>{//name being passed as parameter
    console.log(`Hello ${name}`)
})("Rishabh");//Value of name being passed when the function is invoked





