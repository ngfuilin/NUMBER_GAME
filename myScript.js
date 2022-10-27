let nums = [];

let listnum = '';
let count = 0;
let randomNum = Math.floor(Math.random() * 100) + 1;
const guessResult = document.querySelector(".guessResult")
const prevGuess = document.querySelector(".prevGuess")
const guessMessage = document.querySelector(".guessMessage")
const guessField = document.querySelector(".guessField");
const divButton = document.querySelector('.divRenew');

let inputNum = 0;
let resetButton;

const _submit = document.querySelector(".guessSubmit");
_submit.addEventListener('click', submitGuess);

const _guessField = document.querySelector(".guessField");
_guessField.addEventListener('input', validateNum);


function validateNum() {
    inputNum = Number(guessField.value);
    if (inputNum <= 0 || inputNum > 100) {
        guessField.value = '';
        guessField.focus();
    } 
}

function submitGuess() {
    
    inputNum = Number(guessField.value);
   nums.push(inputNum);
   if (inputNum === randomNum) {
       
       guessMessage.textContent = 'Congratulation! You guess the right answer in ' + (count + 1) + ' turn(s)!';
       guessResult.textContent = 'CORRECT';
       guessResult.style.backgroundColor = 'green';
       reset();
     
   } else if (inputNum < randomNum) {
        
        guessMessage.textContent = 'Number too low!'; 
        guessResult.textContent = 'WRONG';
        guessResult.style.backgroundColor = 'red';
        
   } else if (inputNum > randomNum) {
       
        guessMessage.textContent = 'Number too high!';  
        guessResult.textContent = 'WRONG';
        guessResult.style.backgroundColor = 'red';
      
   }

   prevGuess.textContent = 'Previous guess: ' + `${nums.join(' ')}`;
   count ++;
   if (count === 10) {
        guessMessage.textContent = 'WRONG';   
        guessResult.textContent = '!!! GAME OVER !!!';
        guessResult.style.backgroundColor = 'red';
        reset();
   } else {
        guessField.value = '';
        guessField.focus();
   }
    
}

function reset() {
    guessField.disabled = true;
    _submit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    divButton.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    count = 0;
    nums = [];
    guessField.value = '';   
    divButton.removeChild(resetButton);
    const divparam = document.querySelectorAll('.result p');
    divparam.forEach((node) => {
        node.textContent = '';
        
    });

    _submit.disabled = false;
    guessField.disabled = false;
    randomNum = Math.floor(Math.random() * 100) + 1;
    guessField.focus();
}

