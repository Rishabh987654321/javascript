const { use } = require("react");

function fun(num){
    return num*5
}

fun.power=2

console.log(fun(5));
console.log(fun.power);//using function as object
console.log(fun.prototype);//{} ye prototype uss function ki property hoti hai


//javascript me har ek cheez ek object hoti hai ...arrays ,string under the hood ek object hai
//yha pe function as a function bhi use kr skte hai and as a object bhi use kr skte hai


function createUser(userName,score){
    this.userName=userName
    this.score=score
}


//yha pe hamne create user function ko as object use kiya hai and we know that object me prototype hote hai..or ham agar chahe to khud ka prototype bhi bana skte hai ...yha pe increment ek prototype hai createUser ka
createUser.prototype.increment=function(){
    this.score++//yha pe bs score++ krenge to smjh me ni ayega function ko ki kiska context de rhe isiliye this.score krrhe mtlb jisne pehle call kiya uska context use kro
}

createUser.prototype.printMe=function(){
    console.log(`Score is : ${this.score}`)
   
}
const user1=new createUser("Ram",20)//yha pe new keyword use kiye hai kyoki user1 ko batana padega ki createUser me new functionality add hui hai like increment 
const user2=new createUser("Shyam",10)

user1.printMe()


// here is what happens behind the scenes when new keyword is used:
//A new object is created : The new keyword initiates the creation of a new javascript object
//A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

//The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

//The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
