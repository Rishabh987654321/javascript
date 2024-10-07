//for loop
for (let index = 0; index < 10; index++) {
    console.log(index); 
}



for (let i = 0; i < 10; i++) {
    console.log(`outer loop value ${i}`);
    
    for(let j=0;j<10;j++){
        console.log(`inner loop ${j}`);
        
    }    
}

for (let i = 0; i <=10; i++) {
    console.log(`outer loop value ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArr=["falsh","batman","wonderwoman","flash"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
}


//keywords used in loops
//break and continue
for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`5 detected`);
        break;//breaks out of the loop and function is terminated
    }
    console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log(`5 detected`);
        continue;//skips the current iteration if condition is satisfied and moves directly onto next iteration
    }
    console.log(`value of i is ${i}`);
}



