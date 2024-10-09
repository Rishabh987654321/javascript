let randomNumber=(parseInt(Math.random()*100)+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')//
let prevGuess=[]
let numGuesses=1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()//to prevent values from ging to server
       const guess= parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)||guess<1 || guess>100 || guess===null || guess===undefined ){
        alert('Please enter a number between 1 and 100')
    }else{
        //push the guess into the array
        prevGuess.push(guess)
        if(numGuesses===11){
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNumber}`)
            endgame()
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===randomNumber){
        displayMessage(`You won! The number was ${randomNumber}`)
        endgame()
    }else if(guess<randomNumber){
        displayMessage('Too low')
    }else if(guess>randomNumber){
        displayMessage('Too High')
    }
}
function displayGuess(guess){
    userInput.value=''//emptying the value once the user submit its value
    guessSlot.innerHTML+=`${guess} | `
    numGuesses++//incrementing the number of guesses
    remaining.innerHTML=`${11-numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}



function newgame(){
   const newGameButton= document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
    randomNumber=(parseInt(Math.random()*100)+1)
    prevGuess=[]
    numGuesses=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
   })
}

function endgame(){
    //reset the game
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<button id="newGame">Start New Game</button>`
    startOver.appendChild(p)
    playGame=false
    newgame()
}