let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;




const head1 = document.querySelector("h1");
const head2 = document.querySelector("h2");
const head3 = document.querySelector("h3");




const hideWeapons1 = document.querySelector("#rock-btn");
const hideWeapons2 = document.querySelector("#paper-btn");
const hideWeapons3 = document.querySelector("#scissors-btn");




const restartBtn = document.querySelector("#restart")
restartBtn.addEventListener( 'click', restartGame)






// These event listener handle user input for the game
const selectRock = document.querySelector("#rock-btn");
selectRock.addEventListener('click',rock);

const selectPaper = document.querySelector("#paper-btn");
selectPaper.addEventListener('click',paper);

const selectScissors = document.querySelector("#scissors-btn");
selectScissors.addEventListener('click',scissors);








// These function are used in eventlisteners.
function scissors(){
    playerSelection = "SCISSORS";
    game(playerSelection,computerPlay);
}
function paper(){
    playerSelection = "PAPER";
    game(playerSelection,computerPlay);
}
function rock(){
    playerSelection = "ROCK";
    game(playerSelection, computerPlay);
}






// This function restart the game.
function restartGame(){
    playerScore = 0 ;
    computerScore = 0; 
    hideWeapons1.classList.remove("hidden");
    hideWeapons2.classList.remove("hidden");
    hideWeapons3.classList.remove("hidden");
    restartBtn.classList.add("hidden")
    head1.textContent = " ";
    head2.textContent = " ";
    head3.textContent = " ";
}






// This function provides random selection out of an array
function computerPlay(){
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerSelect = choices[Math.floor(Math.random() * Math.floor(3))];
    return computerSelect;
}






// This function runs when user wins the game round.
function userVictory(){
    playerScore += 1;
    head1.textContent = "You won the round";
    head2.textContent = playerSelection + " beats " + computerSelection;
}
// This function runs when computer wins the game round.
function computerVictory(){
    computerScore += 1;
    head1.textContent = "You lost the round";
    head2.textContent = computerSelection + " beats " + playerSelection;
}
// This function runs when it's a draw.
function draw(){
    head1.textContent = "It's a draw.";
}





// This fuction evaluates the choices and decide the winner.
function game(playerSelection, computerSelectFunction){
    computerSelection = computerSelectFunction();
    if (computerSelection === playerSelection){
        draw();
    }else if(computerSelection ==="ROCK" && playerSelection ==="PAPER" ||
    computerSelection === "PAPER" && playerSelection === "SCISSORS" ||
    computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        userVictory();
    }else if(computerSelection ==="PAPER" && playerSelection ==="ROCK" ||
    computerSelection === "SCISSORS" && playerSelection === "PAPER" ||
    computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        computerVictory();
    }
    head3.textContent = "Player Score: " + playerScore + "| Computer Score: " + computerScore ;
    roundTest();
}




// This function checks the game when any player hits score of 5.
function roundTest(){
    if(computerScore == 5){
        head1.textContent = "Game Ends.";
        head2.textContent = "Computer won the game.";
        hideWeapons1.classList.add("hidden");
        hideWeapons2.classList.add("hidden");
        hideWeapons3.classList.add("hidden");
        restartBtn.classList.remove("hidden");
        }
    else if(playerScore == 5){
        head1.textContent = "Game Ends.";
        head2.textContent = "You won the game.";
        hideWeapons1.classList.add("hidden");
        hideWeapons2.classList.add("hidden");
        hideWeapons3.classList.add("hidden");
        restartBtn.classList.remove("hidden");
    }
    head3.textContent = "Player Score: " + playerScore + "| Computer Score: " + computerScore ;
    }
