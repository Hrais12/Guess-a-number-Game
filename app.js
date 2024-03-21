const random= Math.floor(Math.random()*100)+1;
let attempts = 0;
let timerSeconds = 30; // Adjust as needed
let timerInterval;

const startTimer = () => {
    timerInterval = setInterval(() => {
        timerSeconds--;
        document.getElementById("timer").textContent = `Time left: ${timerSeconds} seconds`;
        if (timerSeconds === 0) {
            clearInterval(timerInterval);
            document.getElementById("result").textContent = `Time's up! You lose.`;
            disableInput();
        }
    }, 1000);
};
function startGame() {
    startTimer();
    // Additional logic for starting the game if needed
}

const userInput = () =>{

    let userGuess= document.getElementById("userGuess")
    let guess= parseInt(userGuess.value)
   
    let result = document.getElementById("result")


    if ( isNaN(guess) || guess <1 | guess > 100) {
        
        result.textContent = `Enter a number betwenn 1 and 100 `
    
} else {
    attempts++; // Increment attempts counter here
    if (guess === random) {
        result.textContent = `You win! It took you ${attempts} attempts.`;
        disableInput();
    } else if (guess < random) {
        result.textContent = `Too low, try again`;
    } else {
        result.textContent = `Too high, try again`;
    }
}
};



function disableInput() {
    const guessInput = document.getElementById('userGuess');
    guessInput.disabled = true;
}


function resetGame() {
    document.getElementById('userGuess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('userGuess').disabled = false;
    random = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    timerSeconds = 30; // Reset timer
    document.getElementById("timer").textContent = `Time left: ${timerSeconds} seconds`;
    clearInterval(timerInterval); // Reset timer
    startTimer(); // Restart timer
}