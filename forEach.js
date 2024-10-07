const coding=["js","java","kotlin","c++","c"]

//for each loop takes a callback function as parameter
//a call back function has no name
coding.forEach(function(item){
    console.log(item);//prints all the elements of the array
})

//we can also use an arrow function inside the forEach loop
coding.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)//we can also give another function inside the for each loop
//coding.forEach(printMe())//this will give error so we dont have to invoke the function we just have to give its name


coding.forEach((item,index,myArr)=>{//item prints the value at each index.....index prints the index as in 0,1... and myArr prints the whole array
    console.log(item,index,myArr);
})

const arr=[
    {
        languageName:"java",
        extension:".java"
    },
    {
        languageName:"c++",
        extension:".cpp"
    },
    {
        languageName:"python",
        extension:".py"
    },
    {
        languageName:"javascript",
        extension:".js"
    }
]
//we can apply for each loop to get access of each object as element in the array
arr.forEach((item)=>{
    console.log(item.languageName);//it will print all the name of languages from each object
})
arr.forEach((item)=>{
    console.log(item.extension);
})