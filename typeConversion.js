let score="33abc"
console.log(typeof score);//string
let valueInNumber=Number(score)//type conversion to a number 
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN


//"33"=> 33
//"33abc"=> NaN
//null=> 0
//true=>1
//false=>0
//undefined => NaN

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

//1=> true 
//0=> false
//""=> false
//"abcd"=> true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);//string
