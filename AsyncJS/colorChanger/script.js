const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
//console.log(Math.floor(Math.random()*16));//will give random value in b/w 0-16
//console.log(randomColor());

let intervalId;
const startChangingColor=function(){
    if(intervalId==null){//checking if interval id is null then assign the color values
        intervalId=setInterval(changeBgColor,1000)
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
    
}
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null//better code practise....we are flushing out interval id from memory for efficiency
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
