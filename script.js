let cpuChoise = ["piedra", "papel", "tijera"];

function computerPlay(){
    randomPlay = cpuChoise[Math.floor(Math.random()*3)];
    return(randomPlay);
}

function userPlay(){
    return ("rock");
}

function playRound (playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
}

const playerSelection = userPlay();
const computerSelection = computerPlay();

playRound(playerSelection, computerSelection);

