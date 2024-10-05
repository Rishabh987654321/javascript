//one way to declare a number
const value=200
console.log(value);//200

//another way to declare a number
const num=new Number(300)
console.log(num);//[Number: 300]

//some methods in number
console.log(num.toString());//now num has become string and we can use all the properties of string to num
console.log(typeof num);

const balance=new Number(100)
console.log(balance.toFixed(2));//this will give value upto two decimal places


const otherNum=123.8966
console.log(otherNum.toPrecision(4));// 123.9 (it will give precise value upto 4 digit)
console.log(otherNum.toPrecision(3));// 124 (it will give precise value upto 3 digit)


// *****************************************************************************************************
//Maths library in js


console.log(Math);//ye apne aap me ek object hai jiske andar bht sare methods hai
console.log(Math.abs(-4));//change negative value to positive
console.log(Math.round(4.3));//gives round of value of a floating number
console.log(Math.ceil(4.2));//as the name suggest ceil means it gives top value in this case it will give 5
console.log(Math.floor(4.7));//as the name suggest floor means it gives bottom value in this case it will give 4
console.log(Math.min(3,6,5,7,8));//gives the minimum value in an array
console.log(Math.max(3,4,5,6,7));//gives the maximum value in the array
console.log(Math.pow(2,3));//gives the power of a number in this case it is 2*2*2=8
console.log(Math.random());//gives a random value in between 0 and 1...both 0 and 1 are exclusive]


console.log((Math.random()*10)+1);//now this will give value that will be 0.1......to 9.99999999
console.log(Math.floor(Math.random()*10)+1);//this will give a number between 0 and 9


//suppose we want random number in between 10 and 20 then there is a generic formula for that
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);//now this will give value between 10 and 20






