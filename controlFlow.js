//if statement
const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("This will print");
}
if(!isUserLoggedIn){
    console.log("This will not print");
}

const temp=41
if(temp<50){
    console.log('temp less than 50');
}else{
    console.log('temp greater than 50');
}



const score =200
if (score>100) {
    const power="fly"
    console.log(`User poewr is ${power}`);
} 

if (score===200) {
    var power="swim"
    console.log(`User poewr is ${power}`);
} 
console.log(`User poewr is ${power}`);//here var is global scope so we can access it outside the if statement even though it is declared inside the if statement



//switch statement
const day="sunday"
switch(day){
    case "monday":
        console.log("Today is monday");
        break;
    case "Tuesday":
        console.log("Today is tuesday");
        break;
    case "sunday":
        console.log("Today is sunday");
        break;
    default:
        console.log("Today is not a weekday");
}



// truthy and falsy value

// falsy values are false,0,"",null,undefined,NaN,0n
// truthy values are "0",'false'," ", true,1,"hello",[],{},[]


const emptyObj={}
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty");
    
}

//nullish coalescing operator (??): 
//this operator works only null and undefined
//it returns the first operand if it is not null or undefined, otherwise it returns the second operand
let val;
val=5??10
console.log(val);//5

let val1=null??10
console.log(val1);//10

let val2=null??undefined
console.log(val2);//undefined

let val3=null??10
console.log(val3);//10

let val4=null??10??20
console.log(val4);//10 first default value is returned



//terniary operator
//it is used to replace if else statement
//it is used to assign a value to a variable based on a condition
//it is used to return a value based on a condition
//condition ? true :false
const price=100
price<=80 ? console.log("less than 80"): console.log("more than 80");





