//declaring an array
//array is an object in js
//array in js can be mix of number, string , array in array, etc
//const arr=[1,2,3,4,5]
//array in js jab bhi ham copy operation karenge to shallow copy hota hai
//shallow copy ka mtlb hota hai same refrence matlab ki agar ham copy array me changes karenge to original array me bhi change hoga

const array2=new Array(1,2,3,4)
console.log(array2)//output: [1,2,3,4]
array2.push(6);//adds a value to the end of the array
console.log(array2);
array2.pop()//removes a value from the end of the array
console.log(array2);
array2.unshift(9)
console.log(array2);//adds the value to th starting of the array
array2.shift()//removes the value from the starting of the array
console.log(array2);

console.log(array2.includes(9));
console.log(array2.indexOf(3));

const newArr=array2.join()//adds all the element of an array into a string
console.log(newArr);
console.log(array2);
console.log(typeof newArr);//String
console.log(typeof array2);//object


//slice method
const arr1=[1,2,3,4,5]
const arr2=arr1.slice(0,3)
console.log(`Arr1 is ${arr1}`);
console.log(`Arr2 is ${arr2}`);

const arr3=arr1.splice(0,3)
console.log(`arr3 is ${arr3}`);
console.log(`arr1 ..the original array is ${arr1}`);


/*the diffrence between slice and splice method is*/
//slice and splice both gives a part of the array as a result 
//but splice changes the original array it removes the indexes given inside splice method from the original array
//conclusion=> splice operation manipulates the original array as it removes the indexes given under splice method
