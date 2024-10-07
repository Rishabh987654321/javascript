//specialised loop to run on array
//for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {//we can use for of loop on string, array etc
    console.log(num);
}

const str="Rishabh"
for (const s of str) {
    console.log(`Each char is ${s}`);
}

//maps
const map=new Map()//The map object holds a key value pair and remember the original insertion order of keys
//it contains unique value
map.set('IN',"India")
map.set("USA","united states of america")
map.set("Fr","france")
console.log(map);
map.set("IN","India")
console.log(map);//still shows three value as it only contains unique element hence india is added only once

//adding loop to map
//we use for of loop
for (const key of map) {
    console.log(key);//this will print the whole map with its key and value
}

//if we want to print only key or only value then
for (const [key,value] of map) {
    console.log(key);//will print only the keys
}

for (const [key,value] of map) {
    console.log(`${key}:-${value}`);
}


//using for of on a object
const myObj={
    1:'a',
    2:'b',
    3:'c',
    4:'d'
}
// for (const [key,value] of myObj) {
//     console.log(key);
// }
//the obove will give an error "myObj is not iterable" hence we can not iterate objects like this,...there are other ways
//to iterate on a object we use for in loop

for (const key in myObj) {
    console.log(key);//we will get all the key
}
for (const key in myObj) {
    console.log(`${key}:- ${myObj[key]}`);//this will give all the key with its value
}

const myarr=[100,200,300,400,500]
for (const key in myarr) {
    console.log(key);//this will give all the index //0 1 2 3 4
}
for (const key in myarr) {
    console.log(myarr[key]);//this will give all the values //100 200 300 400 500
}


//Note:-- a map object can not be iterated usding for in loop