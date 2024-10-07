//reduce method
//The reduce method in JavaScript is a powerful array method that reduces an array to a single value by executing a reducer function on each element of the array. 
//The reduce method processes the array from left to right, passing the result from one iteration to the next.


//array.reduce(callback(accumulator, currentValue, index, array), initialValue)
//accumulator: It accumulates the callback's return values; it is the result of the previous iteration.
//currentValue: The current element being processed in the array.
//index (optional): The index of the current element.
//array (optional): The array reduce was called upon
//initialValue (optional): A value to be used as the first argument in the first call of the callback. If not provided, the first element of the array will be used as the initial accumulator.


const myNums=[1,2,3]
const myTotal=myNums.reduce((acc,currVal)=> (acc+currVal),0)//here initial value is 0
//console.log(myTotal);//6

const myarr=[1,2,3]
const arrSum=myarr.reduce(function(acc,currVal) {
    console.log(`accumulator value ${acc} and currvalue ${currVal}`);
    return acc+currVal
},3)//here initial value is given 3
console.log(arrSum);//6

const shoppingCart=[
    {
        item:"chips",
        price:90
    },
    {
        item:"pencil",
        price:50
    },
    {
        item:"books",
        price:300
    },
    {
        item:"makeup",
        price:100
    },
    {
        item:"fruits",
        price:60
    }
]

const totalPrice=shoppingCart.reduce((acc,curritem)=>(acc+curritem.price),0)
console.log(totalPrice);



