//constructor function using new keyword

function User(userName,loginCount,isLoggedIn){

    this.userName = userName;

    this.loginCount=loginCount

    this.isLoggedIn = isLoggedIn;

    return this;

}




const User1=User("ram",12,true)

console.log(User1);

//output without using new keyword

//userName: 'ram',

//loginCount: 12,

//isLoggedIn: true




const User2=User("shyam",11,false)

console.log(User1);

//output=> even if we are printing user1 here its value is being overwritten by user2 and that is why we are getting User2 value in user1

//userName: 'shyam',

//loginCount: 11,

//isLoggedIn: false






//to avoid this situation we use new keyword

function anotherUser(userName,loginCount,isLoggedIn){

    this.userName=userName;

    this.loginCount=loginCount;

    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){

        console.log(`Welcome ${this.userName}`);

    }

}

const anotherUser1=new anotherUser("john",10,true)

console.log(anotherUser1);

const anotherUser2=new anotherUser("jimmy",20,false)

console.log(anotherUser2);

anotherUser2.greetings();

//now no value will be overwritten and each constructor will have its own value 