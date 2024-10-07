//The filter() method creates a new array containing only elements that satisfy a specified condition. 
//It does not change the original array and is useful for selecting specific elements from an array based on certain criteria
//Use filter() when you want to select specific elements that meet a particular condition.
const coding=["js","java","kotlin","c++","c"]

const values=coding.forEach((item)=>{
    console.log(item);
})
console.log(values);//undefined foreach loop never returns a value it can not store or return a value in variable can be just used for iteration

const arr=[1,2,3,4,5,6,7,8,9,10]
const ans=arr.filter((ele)=> (ele>4))//filter method can return and store a value in a variable
console.log(ans);//[ 5, 6, 7, 8, 9, 10 ]



const books=[
    { title:"Book one",genre:"Fiction",publish:1987,edition:2015},
    { title:"Book two",genre:"History",publish:1980,edition:2001},
    { title:"Book three",genre:"Crime",publish:1990,edition:2014},
    { title:"Book four",genre:"History",publish:2000,edition:2020},
    { title:"Book five",genre:"History",publish:2005,edition:2000},
    { title:"Book six",genre:"Fantasy",publish:1975,edition:2005},
    { title:"Book seven",genre:"Non-fiction",publish:1947,edition:2019}
]

const ansBooks=books.filter((bk)=>bk.genre==="History")//it will return all the objects that has genre of history
console.log(ansBooks);
const publishDate=books.filter((bk)=>{return bk.publish>=2000})
console.log(publishDate);


