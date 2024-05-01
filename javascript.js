function getComputerChoice(){
    num = Math.random()
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

function getHumanChoice(msg = "Please enter your choice"){
    let choice = prompt(msg, "")
    choice = choice.toLowerCase(); //makes the input case-insensitive
    if (choice == "rock"){
        return "rock";
    }

    else if (choice == "scissors"){
        return "scissors";
    }

    else if (choice == "paper"){
        return "paper";
    }

    else{
        getHumanChoice("Incorrect input, please enter 'rock', 'paper', or 'scissors'");
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("The round is a tie");
        return "Tie";
    }

    if ( (humanChoice == "scissors" && computerChoice == "paper") || 
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "You win!";
    }

    if ( (computerChoice == "scissors" && humanChoice=="paper") ||
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "You lose!";
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

playGame();


