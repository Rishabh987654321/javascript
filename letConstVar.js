const accountId=123;
let accountMail="rishabh@gmail.com;"
var accountPassword="12345";
accountCity="Jaipur";//do not declare any variable like this not recommended
let accountstate;//undefined

//accountId=12345;//this will give error as const can not be changed once it has been declared
accountMail="r@gmail.com";
accountPassword="123456";
accountCity="Pune";
console.log(accountId);
console.table([accountMail,accountPassword,accountCity,accountstate]);

/*prefer not using var because of issue in functional scope and block scope..... always use let or const*/