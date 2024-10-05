const name="Rishabh"
const lastname="Kumar"


//old method to concatenate a string
console.log(name+" "+lastname);

//modern way
console.log(`My first name is ${name} and my last name is ${lastname}`);

//string is of type object when declared with new keyword
const username=new String('whoIsYourDaddy')
console.log(typeof username);

//some popular methods in string
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.charAt(2));
console.log(username.indexOf('D'));
console.log(username.substring(0,3));

const anotherString=username.slice(4,9)
console.log(anotherString);
const anotherstring=username.slice(3,-1)//we can do slicing from the back also
console.log(anotherstring);

const formUser="     Rishabh   "
console.log(formUser.trim());//Rishabh

const url="https//:rishabhkumar.com/rishabh%20kumar"
console.log(url.replace('%20','-'));//https//:rishabhkumar.com/rishabh-kumar 

console.log(url.includes('rishabh'));//true

console.log(url.split('/'));//[ 'https', '', ':rishabhkumar.com', 'rishabh%20kumar' ] splits the string on the basis of '/' and returns three string

 
