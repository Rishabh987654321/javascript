const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="John Doe"
tinderUser.age=25
tinderUser.isLoggedIn=false

const user={
    email:"abc@gmail.com",
    fullName:{//we can declare an object inside an object
        first:"John",
        last:"Doe"
    }
}
console.log(user.fullName);
console.log(user.fullName.last);

//we can combine or merge two object 
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d",
}
console.log(Object.assign(obj1,obj2));//assign operator is used to merge two or more object
//we can also use spread operator hre which is most freuently used in cases like this
console.log({...obj1,...obj2});


const player=[
    {
        id:1,
        email:"user1@mail.com",
    },
    {
        id:2,
        email:"user2@mail.com",
    },
    {
        id:3,
        email:"user3@mail.com",
    }
]
console.log(player[0].email);

//if we want to get all the keys and values of a object 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//to check if the object has isLoggedIn property or not


