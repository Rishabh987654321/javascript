let myDate=new Date();
console.log(myDate);//2024-10-05T12:20:42.535Z
console.log(myDate.toString());//Sat Oct 05 2024 17:51:42 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Sat Oct 05 2024
console.log(myDate.toISOString());//2024-10-05T12:23:09.369Z
console.log(myDate.toJSON());//2024-10-05T12:23:09.369Z
console.log(myDate.toLocaleString());//5/10/2024, 5:54:08 pm
console.log(typeof myDate);//object

let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());//Mon Jan 23 2023.... months in js start from 0






