//map
//The map() method creates a new array by applying a given function to each element of the original array. 
//It transforms each element according to the logic defined in the callback function without altering the original array.
//Use map() when you need to transform or manipulate every element in an array.
const arr=[1,2,3,4,5,6,7,8,9,10]
const finalArr=arr.map((num)=>num+10)//similar to filter method it also takes a callback function and can store and return a value
console.log(finalArr);

//chaining
const newAns=arr.map((num)=>num*10)//value of num in this map method is passed to next map method and then the same value is passed to filter method 
.map((num)=>num+1 ).filter((num)=>num>40)//this is called chaining in this we use multiple methods at once to get output
console.log(newAns);


const fruits=[
    {name:'apple',color:'red'},
    {name:'banana',color:'yellow'},
    {name:'cherry',color:'red'},
    {name:'date',color:'brown'},
    {name:'elderberry',color:'purple'}
]
const tranformFruit=fruits.map((fruit)=>({
    fruitName:fruit.name.toUpperCase(),
    FruitColor:fruit.color.toUpperCase()
}))
console.log(tranformFruit);

