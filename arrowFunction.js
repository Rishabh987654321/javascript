//this keyword is used to refer to the current context of any object  
const obj={
    userName:"Rishabh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName} welcome to website`);//here this refers to the context of the object
        
    }
}
obj.welcomeMessage()
obj.userName="Sam"
console.log(obj.userName);//sam
obj.welcomeMessage()//Sam welcome to website...we can see that this keyword refers to the current context since the username has been changed to sam now the this keyword will refer to sam


console.log(this);//{} this will return an empty object because now this is refering to node environment and it is empty


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function chai(){
    console.log(this)//this will return the global object in browser and node environment
}
chai()


function printName(){
    let username="Rishabh"
    console.log(this.userName);//we can not use this keyword inside a function like this
}
printName()//this will return undefined because this keyword is not defined in the function printName()

 //arrow function
 //note arrow function me this keyword ka access ni hota hai
 const name=()=>{
    let name="Rishabh"
    console.log(this.name);//here also this will give undefined because this keyword is not defined in function
 }
 name()//this will return undefined because this keyword is not defined in the function name()


const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(5,10));

//we can also define the above arrow function like this (this type of function is also called implicit return function)
const addtwo=(num1,num2)=>num1+num2//we do not need to write return here as the program can itself assume the return type
console.log(addtwo(5,10)); 

//another way to declare the above function
const addTWO=(num1,num2)=>(num1+num2)
console.log(addTWO(10,5));

//returning an object in the implicit function
const objectReturn=()=>({userName:"Rishabh"})
console.log(objectReturn());



