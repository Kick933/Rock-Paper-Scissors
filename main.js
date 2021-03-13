function computerPlay(){
    let choices = ["ROCK", "PAPER", "SCISSORS"]
    let computerSelection = choices[Math.floor(Math.random() * Math.floor(3))]
    return computerSelection
}
let computerSelection = computerPlay();// Ran function to assign return value to variable.
// The player will be asked to enter his choice using "PROMPT" in the below function.
function playerInput(){
    let playerSelect = prompt("Please enter 'Rock','Paper' or 'Scissors'.")
    return playerSelect.toUpperCase()
}
let playerSelection = playerInput();
verify(playerSelection)
// This function verifies if user entered correct argument to "prompt".
function verify(x){
    if( x === 'ROCK' || x ==='SCISSORS' || x ==='PAPER'){
        // Code to run to be placed here.Please remember this.
        logic(computerSelection, playerSelection);
    }
    else{
        alert("You Entered wrong text. Reload page and try again")
    }
}
function logic(computerSelection, playerSelection){
    if (computerSelection === playerSelection){
        alert(`It's a draw. You selected ${playerSelection}.`)
    }
    else{
        // Code to be placed here.
        if( computerSelection ==='ROCK'){
            if(playerSelection ==='PAPER'){
            alert(`You won. You choose ${playerSelection} and computer selected ${computerSelection}`)
            } else if(playerSelection ==='SCISSORS'){
                alert(`You lost. You choose ${playerSelection} and computer selected ${computerSelection}`)
            }
        }
        else if ( computerSelection === 'PAPER'){
            if(playerSelection ==='ROCK'){
                alert(`You lost. You choose ${playerSelection} and computer selected ${computerSelection}`)
            }
            else if(playerSelection === 'SCISSORS'){
                alert(`You won. You choose ${playerSelection} and computer selected ${computerSelection}`)
            }
        }
        else if(computerSelection ==='SCISSORS'){
            if(playerSelection === 'PAPER'){
                alert(`You lost. You choose ${playerSelection} and computer selected ${computerSelection}`)
            }
            else if(playerSelection === 'ROCK'){
                alert(`You won. You choose ${playerSelection} and computer selected ${computerSelection}`)
            }
        }
        }
    }
