//declaring a function
function myName(){
    console.log();
    console.log();
    console.log();
    console.log();

}
//myName()

function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
addTwoNumber()//NaN
addTwoNumber(3,4)//7
addTwoNumber(3,"4")//34
addTwoNumber(3,null)//3
const result=addTwoNumber(3,5)//8
console.log(result);//undefined..because we have not use a return statement so here only the console log works and the result do not have any value stored



function add(num1,num2){
    return num1+num2
}

const ans=add(2,3)
console.log(ans)



function userMessage(username){
    return `${username} just logged in`
}
userMessage("Rishabh")//if we run this we will not get any output because we have not told our function to print the message we have just returned it
const message=userMessage("Rishabh")
console.log(message);//Rishabh just logged in
const message1=userMessage()
console.log(message1);//undefined just logged in ...because we have not given any arguments in the function so it is undefined


