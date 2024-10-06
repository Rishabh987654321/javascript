//objects in js can be made using two ways
//1. using object literal
let obj1={
    name:"Rahul",
    age:25,
    city:"Delhi",
    isLoggesIn:false,
    lastloginDay:["Monday","Friday"]
}
//2. using constructor function
//whenever we create an object using constructor function a singleton object is formed
class Person{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
    }
}


//accessing elements of an object
console.log(obj1.name);
console.log(obj1["age"]);//we can also use square bracket to access the props but remember to write it in string as behind the scenes the keys are stored as string in objects
//changing an existing value of object
obj1.name="Rishabh"
console.log(obj1.name);


//creating an object that contains a symbol datatype and printing it
//there is only one legit way to do this
const mySymbol=Symbol("key1")
const obj={
    [mySymbol]:"value1",
    name:"Rishabh"
}
console.log(obj[mySymbol]);
console.log(typeof  mySymbol);//symbol


//if we want to freeze an  object so that no one can change it's properties
Object.freeze(obj1);
obj1.name="jdjcc"
console.log(obj1);//we can see that the values of obj1 has not been changes


//lets give a function as properties in a object
const object={
    carName:"BMW",
    engine:"turbo",
    horsePower:250,

}
object.greeting=function(){
    console.log("hello");
}
console.log(object.greeting);//[Function (anonymous)] we get this output because greeting is a function and to invoke a function we have to use greeting()
console.log(object.greeting());//hello ....here we have invoked the function correctly

object.greeting2=function(){
    console.log(`Hello car user this is, ${this.carName}`);
}
console.log(object.greeting2());//Hello car user this is, BMW



