if(true){
    let a=10
    const b=20
    var c=30
}
//console.log(a);//error a is not defined because a is block scopped and can be accessed only inside the if condition
//console.log(b);//error b is not defined because a is block scopped and can be accessed only inside the if condition
console.log(c);//30 c is global scopped so it can be accessed anywhere in the program now this can be an issue so we alwyas avoid using var


function one(){
    const username="Rishabh"
    function two(){
        const website="youtube"
        console.log(username);//Rishabh
    }
    //console.log(website);//will give error as const website has a block scope and cannot access outside its block
    two();
}
one()

if(true){
    const user="Rishabh"
    if(user==="Rishabh"){
        const website="youtube"
        console.log(user+website);//Rishabhyoutube
        
    }
    //console.log(website);//throws an error because website is outside its block scope
}
//console.log(user); //this also throws an error because user is being accessed outside the block scope



console.log(addOne(5));//we are calling the function first and then it has been initialised and this will return 6 as an ans no error will occur
function addOne(num){
    return num+1
}
addOne(5)//the function has been called but its vakue has not been printed to so no output will come




console.log(addTwo(5));//here we will get an error  Cannot access 'addTwo' before initialization because we are accesing addtwo before even initialising it and its a variable so it throws an error
const addTwo=function(num){//this a function but since it is stored in a variable it is also called expression
    return num+2
}
addTwo(5)