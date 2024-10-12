//promise ka do part hai ek promise ko banana or ek consume krna 

const { reject } = require("lodash");


//ham promise ko aise banate h  with help of new keyword
const promiseOne=new Promise(function(resolve,reject){//do parameter leta hai resolve and reject
    //async task
    //resolve and reject ka use async task ke result ko promise ke result me convert karna hai
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    },1000)
})
//consuming the promise
promiseOne.then(function(){//then ka connection hai resolve ke sath
    console.log("async resolved");
    
})
//pehle async task(in this case the settimeout) complete hoga then resolve() call hota hai tb jake promise execute hota hai




//upar wala part step by step tha promise banane se leke usko consume and resolve krne tk
//ab hum ek or tarika dekhenge jo ki use hota hai 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 completed ");
        resolve()//resolve ko call krna mandatory hai wrna promise resolved ni hoti ...resolve link krta hai then ko
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 3 completed");
        resolve({user:"rishabh",email:"rishabhkumar90063@gmail.com"})
        //resolve me ham object bhi pass krte hai as parameter and fir ham isko then me access bhi kr skte hai
    },1000)
})

promiseThree.then(function(user){
    console.log(user);//{ user: 'rishabh', email: 'rishabhkumar90063@gmail.com' }
    
})





const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){//agar error ni hai to resolve kro
            resolve({user1:"Rishabh",user2:"harsh"})
        }else{
            reject('Error something went wrong')
        }
    },2000)
})
// const getItem=promiseFour.then((user)=>{ //this will throw an error as we can not directly access the result of then() instead we can pass its value to another then() method ...this process is called chaining
//     console.log(user);
//     return user.user2
// })
// console.log(getItem);//error

promiseFour.then((user)=>{
    console.log(user);
    return user.user1// Passes "Rishabh" to the next .then()
}).then((getUser1)=>{//yha pe jo value arhi hai vo uper wale .then() se arhi hai
    console.log(getUser1);//ab ham upar wale result ko is then me acces kr skte haai
    //isi ko chaining bolte hai upar wale ka result niche wale then me store krte hai ...in this .the() upar wale ka result getUser1 me arhaa hai
}).catch((error)=>{

    console.log(error);//Error something went wrong ye print ho jayega cause upar error true set kiya gya hai agar ni kiya gya hota to rishabh value return hogyi hoti
    
}).finally(()=>{//this is the default case and it gives the final result of promise wether it is solved or rejected..this case always runs
    console.log("The promise is either resolved or rejected");
    
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({item1:"apple",item2:"mango"})
        }else{
            reject('Error kuch to gadbad hai')
        }
    },2000)
})

//we can also handle promises using async await async await waits for the promise to run and gives the response or rejection as recieved from promise
// async function consumePromiseFive(){
//     const response=await promiseFive//this will throw an error because in asyn await we have to use try and catch block if the promise throws an error as async does not handle error on its own
// }

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
        
    }catch(error){

        console.log(error);//Error kuch to gadbad hai cause upar error true hai so reject ho jayga promise ...if false hota to ye answer aata { item1: 'apple', item2: 'mango' }
    }
}
consumePromiseFive()




// let fetch data from a api 

async function getData(){
    try {
        const response=await fetch('https://api.github.com/users/rishabh987654321')
        const data= await response.json()
        console.log(data);//Promise { <pending> } we get this because even response.json which gets the data in json format takes time so we have to await this too
        
    } catch (error) {
        console.log("E:",error);
        
    }
}
getData()


///writing the same function using .then() .catch()

fetch('https://api.github.com/users/rishabh987654321')
.then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

//upar likhe hue approach ki achi baat ye hai ki isme await ni lagana pdta pehle pura then block chalta hai uske baad hi catch block chalega