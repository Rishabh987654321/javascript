//there is a primitive datatype and non primitive data type in js
//primitive data types are immutable
//primitive data types are passed by value i.e there reference in the memory is not used only the data is copied and passed
//primitive data types are not passed by reference
//primitive data types are 
//String , number , boolean , null , undefined, symbol.bigInt
//symbol is used to make a value unique

//Non primitive data types(reference type )
//Array , objects , function


//js is dynamically typed because all the type checks are performed at the run time

const score =100
const scoreFloat=100.1//in js we can simply declare floating point like this
console.log(typeof scoreFloat);//and type is number


const id =Symbol('123');
const anotherid=Symbol('123');
console.log(typeof id);
console.log(typeof anotherid);//Symbol
console.log(id==anotherid);//false
// symbol is unique data type that we assign when we have unique datatype to declare
//even if id and another id have same value still both are not equal as we have assigned them as symbol data type which means both will be treated differently
//symbol is used to make a value unique 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//there are two type of memory in javascript
//stack memory and heap memory
//stack memory is used to store primitive data types. Whenever we use stack memory that means whatever variable we have declared we use its copy
//heap memory is used to store non primitive data types. Whenever we use heap memory that means whatever variable we have declared we use its reference means if we change the variable the original value of variable also changes

//example of stack memory
let myname="Rishabh"
let anothername=myname
console.log(anothername);//Rishabh
anothername="Harsh"
console.log(myname);//Rishabh
console.log(anothername);//Harsh


//example of heap memory
let userOne={
    name:"Rishabh",
    age:21,
}
let userTwo=userOne;
userTwo.name="Harsh"
console.log(userOne.name);//harsh....the anme has been changed on the original object also as it is using pass by reference
console.log(userTwo.name);//harsh....
















