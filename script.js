let cpuChoise = ["rock","paper","scissors"];

function computerPlay(){
    randomPlay = cpuChoise[Math.floor(Math.random()*3)];
    return(randomPlay);
}

function userPlay(){
    userChoice = prompt ("choose! rock, paper, scissors!");
    return (userChoice);
}

function playRound (playerSelection, computerSelection){
    console.log("player chooses: " + playerSelection);
    console.log("cpu chooses: " + computerSelection);

    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            alert ("It's a tie!");
            win = "nobody";
            return(win);            
        } else if (computerSelection == "paper"){
            alert ("You loose! paper beats rock");
            win = "cpu";
            return win;
        } else if (computerSelection == "scissors"){
            alert ("You win! rock beats scissors");
            win = "player";
            return win;            
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "paper"){
            alert ("It's a tie!");
            win = "nobody";
            return(win);
        } else if (computerSelection == "scissors"){
            alert ("You loose! scissors beats paper");
            win = "cpu";
            return win;
        } else if (computerSelection == "rock"){
            alert ("You win! paper beats rock");
            win = "player";
            return win;            
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "scissors"){
            alert ("It's a tie!");
            win = "nobody";
            return(win);
        } else if (computerSelection == "rock"){
            alert ("You loose! rock beats scissors");
            win = "cpu";
            return win;
        } else if (computerSelection == "paper"){
            alert ("You win! scissors beats paper");
            win = "player";
            return win;            
        }
    }
}




function game(){
    let cpuPoints = 0;
    let playerPoints = 0;
    let playerSelection = userPlay();
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    console.log("The winner is: " + winner);
    alert("The winner is: " + winner);
}

let over = false;

alert ("Let's play Rock, Papper, scissors!");
alert ("Are you ready?");

game();
