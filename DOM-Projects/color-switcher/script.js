const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==='grey'){
            // Set the background color of the body based on the ID of the clicked button
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            // Set the background color of the body based on the ID of the clicked button
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            // Set the background color of the body based on the ID of the clicked button
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            // Set the background color of the body based on the ID of the clicked button
            body.style.backgroundColor=e.target.id;
        }
    });
})
