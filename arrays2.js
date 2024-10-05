const marvel=["Ironman","Thor","SpiderMan"]
const dc=["Superman","Batman","Aquaman"]
//marvel.push(dc)
// console.log(marvel);//[ 'Ironman', 'Thor', 'SpiderMan', [ 'Superman', 'Batman', 'Aquaman' ] ] push method change the existing array
// console.log(marvel[3][1]);//Batman

const combined=marvel.concat(dc)//concat method combines two or more array and return an new array
console.log(combined);//[ 'Ironman', 'Thor', 'SpiderMan', 'Superman', 'Batman', 'Aquaman' ]


// using spread operator to merge two array without changing any of the original array
//the spread operator is used to copy elements without using its refrence, hence the original array is not affected
const combinedHero=[...marvel,...dc]
console.log(combinedHero);


//suppose we have an array that has an array in an array withing multiple level..basically nested array
const anotherArr=[1,2,3,[4,5,6],7,[6,7,8,[1,2,3]]]
//now we want every elements of this array to be as single element we can use flat operator
//flat method is used to create a new array with each element in original array
const flatArr=anotherArr.flat(2)//we can also give infinity here in case we don't know the level of nesting
console.log(flatArr);


//whenever we get a data scrapped from a web page it comes in many form ...it can be string ,number array combined
console.log(Array.isArray("Rishabh"))//false
console.log(Array.from("Rishabh"));//this method will make the string into an array
console.log(Array.from({name:"Rishabh"}));//it will give an empty array in this case...we have to specify wether we want an array of key or an array of it value


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//returns a new array from a set of elements






