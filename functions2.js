//suppose there is a customer who is adding one after another item to bag and you have to add on the price

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200));//here we will get 200
console.log(calculateCartPrice(200,300,400,500));//here we will ge 200 as answer and the rest of the price is ignored

//in order to get all the price of item the user is adding in the bag we use a rest operator which is similar to spread operator
function calcCartPrice(...num1){
    return num1
}
console.log(calcCartPrice(200,300,400,500));//[ 200, 300, 400, 500 ]
//here we will get all the price in an array format
//the rest and spread operator are similar it's just named on the use case of these operator



//suppose we have an object
const user={
    name:"Rishabh",
    age:20,
    Occupation:"Web developer",
    city:"Gurgaon"
}
//now we have to pass this object in a function
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and city is ${anyObject.city}`);   
}
//handleObject(user)//Username is Rishabh and city is Gurgaon
handleObject({
    name:"Rahul",
    city:"Noida"
})//Username is Rahul and city is Noida



//passing a array as argument
const arr=[200,300,400,500]
function returnArr(getArr){
    return getArr[1]
}
console.log(returnArr(arr));
