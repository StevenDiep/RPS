function getComputerChoice(){
    let num = Math.random()
    if (num <= .33){
        return "rock";
    }
    else if (.33 < num && num<=.66){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice(human, computer, humanScore, computerScore){
    let choices = document.querySelector('#choices');
    choices.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                console.log('Rock was clicked');
                human.textContent = "rock";
                computer.textContent = getComputerChoice();
                playRound(human.textContent, computer.textContent, humanScore, computerScore)
                break;
            case 'paper':
                console.log('Paper was clicked');
                human.textContent = "paper";
                computer.textContent = getComputerChoice();
                playRound(human.textContent, computer.textContent, humanScore, computerScore)
                break;
            case 'scissors':
                console.log("Scissors was clicked");
                human.textContent = "scissors";
                computer.textContent = getComputerChoice();
                playRound(human.textContent, computer.textContent, humanScore, computerScore)
                break;
    }

    if (humanScore.textContent == 5){
        alert("Congrats, you win the game")
        humanScore.textContent = 0
        computerScore.textContent = 0
        human.textContent = ''
        computer.textContent = ''
    }

    if (computerScore.textContent == 5){
        alert("The computer has won")
        humanScore.textContent = 0
        computerScore.textContent = 0
        human.textContent = ''
        computer.textContent = ''
    }
});
}

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    if (humanChoice == computerChoice){
        console.log("The round is a tie");
    
    }

    if ( (humanChoice == "scissors" && computerChoice == "paper") || 
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore.textContent++;
    }

    if ( (computerChoice == "scissors" && humanChoice=="paper") ||
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore.textContent++;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result == "You win!"){
            humanScore = humanScore + 1;
        }
        else if (result == "You lose!"){
            computerScore = computerScore + 1;
        }

        else {
            humanScore = humanScore + 1;
            computerScore = computerScore + 1;
        }
        
    }

    if (humanScore == computerScore){
        console.log(`The score is ${humanScore} to ${computerScore} the game is a tie`)
    }
    else if (humanScore>computerScore){
        console.log(`The score is ${humanScore} to ${computerScore}, you win!`)
    }
    else{
        console.log(`The score is ${humanScore} to ${computerScore}, you lose!`)
    }
}

//Main Script:
let humanScore = document.getElementById("yourScore")
let computerScore = document.getElementById("computerScore")
let computerChoice = document.getElementById("computerChoice")
let yourChoice = document.getElementById("yourChoice")

getHumanChoice(yourChoice, computerChoice, humanScore, computerScore)

if (humanScore.textContent > 5 && computerScore.textContent > 5){
    alert("Game over")
}




