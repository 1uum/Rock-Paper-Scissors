const playerChoiceRock = document.getElementById('rock');
const playerChoicePaper = document.getElementById('paper');
const playerChoiceScissors = document.getElementById('scissors');

const cpuChoiseRock = document.getElementById('crock');
const cpuChoisePaper = document.getElementById('cpaper');
const cpuChoiseScissors = document.getElementById('cscissors');

let playerScore = document.querySelector('.p_score');
let cpuScore = document.querySelector('.c_score');
let status = document.querySelector('.status');


let cpuChoise = ["rock","paper","scissors"];
function computerSelection(){
    randomPlay = cpuChoise[Math.floor(Math.random()*3)];
    return(randomPlay);
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
            status.textContent = 'its a tie';
            status.style.color = "#ffffff";
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
            status.textContent = 'you loose :(';
            status.style.color = "#CD0000";
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;
            status.textContent = 'you win! :)';
            status.style.color = "#b8ff00";
        }
    }
    if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;
            status.textContent = 'you win! :)';
            status.style.color = "#b8ff00";  
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
            status.textContent = 'its a tie';
            status.style.color = "#ffffff";
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
            status.textContent = 'you loose :(';
            status.style.color = "#CD0000";
        }
    }
    if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            cpuChoiseRock.style.backgroundColor = "#00E1FF";
            cpuPoints++;
            cpuScore.textContent = '' + cpuPoints;
            status.textContent = 'you loose :(';
            status.style.color = "#CD0000";
        }
        if (computerSelection == "paper"){
            cpuChoisePaper.style.backgroundColor = "#00E1FF";
            playerPoints++;
            playerScore.textContent= '' + playerPoints;
            status.textContent = 'you win! :)';
            status.style.color = "#b8ff00";            
        }
        if (computerSelection == "scissors"){
            cpuChoiseScissors.style.backgroundColor = "#00E1FF";
            status.textContent = 'its a tie';
            status.style.color = "#ffffff";
        }
    }
}

function playerClick(){
    playerChoiceRock.addEventListener("click", () =>{
        playerChoiceRock.style.backgroundColor = "#FF00A5";
        playRound('rock', computerSelection());
        remove();
        check();
    });
    playerChoicePaper.addEventListener("click", () =>{
        playerChoicePaper.style.backgroundColor = "#FF00A5";
        playRound('paper', computerSelection());
        remove();
        check();
    });
    playerChoiceScissors.addEventListener("click", () =>{
        playerChoiceScissors.style.backgroundColor = "#FF00A5";
        playRound('scissors', computerSelection());
        remove();
        check();
    });
}

function remove(){
    setTimeout(function(){
        playerChoicePaper.style.backgroundColor = '#2d2d2d';
        playerChoiceRock.style.backgroundColor = '#2d2d2d';
        playerChoiceScissors.style.backgroundColor = '#2d2d2d';
        cpuChoiseRock.style.backgroundColor = '#2d2d2d';
        cpuChoiseScissors.style.backgroundColor = '#2d2d2d';
        cpuChoisePaper.style.backgroundColor = '#2d2d2d';
    },800);
}

function check (){
    if (cpuPoints == 5 || playerPoints == 5){
        if (cpuPoints == 5){
            status.textContent = 'you lost the game! lets play again!';
        }
        if (playerPoints == 5){
            status.textContent = 'you won the game! lets play again!';
        }
        cpuScore.textContent = '0';
        playerScore.textContent = '0';
        cpuPoints=0;
        playerPoints=0;

    }

}

function game(){
    playerClick();
}

let cpuPoints = 0;
let playerPoints = 0;

game();