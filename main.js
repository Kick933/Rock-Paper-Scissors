let computerScore = 0
let playerScore = 0
let round = 0
let computerSelection = 0
let playerSelection = 0

// This function provides random selection out of an array
function computerPlay(){
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let computerSelection = choices[Math.floor(Math.random() * Math.floor(3))]
    return computerSelection
}
// The player will be asked to enter his choice using "PROMPT" in the below function.
function playerInput(){
    let playerSelect = prompt("Please enter 'Rock','Paper' or 'Scissors'.")
    return playerSelect.toUpperCase()
}

// This function verifies if user entered correct argument to "prompt".
function verify(x){
    if( x === 'ROCK' || x ==='SCISSORS' || x ==='PAPER'){
        // Code to run to be placed here.Please remember this.
        logic(computerSelection, playerSelection, round);
    }
    else{
        alert("You Entered wrong text. Please try again")
        game();
    }
}
// This function runs when user wins the game round.
function userVictory(){
    round += 1
    playerScore += 1
    alert(`You won this round. You choose ${playerSelection} and computer selected ${computerSelection}`)
}
// This function runs when computer wins the game round.
function computerVictory(){
    round += 1
    computerScore += 1
    alert(`You lost this round. You choose ${playerSelection} and computer selected ${computerSelection}`)
}
// This function runs when it's a draw.
function draw(){
    round += 1;
    alert(`It's a draw. You selected ${playerSelection}`)
}
// This function is executed at the end of the game.
function gameEnd(){
    if(computerScore > playerScore){
        alert(`You lost the game. Score is ${playerScore}:${computerScore}`)
    }
    else if(computerScore<playerScore){
        alert(`You won the game. Score is ${playerScore}:${computerScore}`)
    }
    else{
        alert(`It's a tie. Score is ${playerScore}:${computerScore}`)
    }
    }
function gameContinue(){
    if (computerSelection === playerSelection){
        draw();
    }
    else if( computerSelection ==='ROCK'){
        if(playerSelection ==='PAPER'){
        userVictory();
        } else if(playerSelection ==='SCISSORS'){
        computerVictory();
        }
    }
    else if ( computerSelection === 'PAPER'){
        if(playerSelection ==='ROCK'){
         computerVictory();
        }
        else if(playerSelection === 'SCISSORS'){
        userVictory();
        }
    }
    else if(computerSelection ==='SCISSORS'){
        if(playerSelection === 'PAPER'){
            computerVictory();
        }
        else if(playerSelection === 'ROCK'){
        userVictory();
        }
    }
}
// This function evaluates computerSelection against playerSelection to decide victory.
function logic(computerSelection, playerSelection, round){
    if(round == 5){
        gameEnd();
        }
    else{
        gameContinue(); 
        }
    }
function game(){
    playerSelection = playerInput();
    computerSelection = computerPlay();
    verify(playerSelection)
}
game();
game();
game();
game();
game();
game();