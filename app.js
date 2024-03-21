const random= Math.floor(Math.random()*100)+1


const userInput = () =>{

    let userGuess= document.getElementById("userGuess")
    let guess= parseInt(userGuess.value)
   
    let result = document.getElementById("result")


    if ( isNaN(guess) || guess <1 | guess > 100) {
        
        result.textContent = `Enter a number betwenn 1 and 100 `
    
    }else if ( guess === random){

        result.textContent = `you win `
        disableInput();


    }else if ( guess < random){
        result.textContent = `Too low, try again`
    }else{
        result.textContent =  `Too high, try again`
    }
    

}

function disableInput() {
    const guessInput = document.getElementById('userGuess');
    guessInput.disabled = true;
}


