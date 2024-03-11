
let computerPoints = 0;
let playerPoints = 0;

function playGame() {
    // the game loops over 5 rounds 
    for (let step = 0; step < 5; step++) {
    
        const listChoice = ["rock", "scissor", "paper"]; 
        //random choice by computer
        let randomNumber = Math.floor(Math.random()*3); 
        let computerChoice = listChoice.at(randomNumber);

        let playerSelect = prompt("Please choose: Rock, Scissor or Paper");
        let playerChoice = playerSelect.toLowerCase();

        // while function to prevent wrong input

        while (playerChoice !== "rock" && playerChoice !== "scissor" && playerChoice !== "paper") {  
            playerSelect = prompt("Wrong Input, chose again: Rock, Scissor or Paper");
            playerChoice = playerSelect.toLowerCase();   
        }
        function play(){
            
            switch(true) {
                case playerChoice === computerChoice:
                    return("You chose: " + playerChoice + "\n The Computer chose: " + computerChoice + "\n It is a tie");
                    break;
                case playerChoice == "rock" && computerChoice == "scissor":
                case playerChoice == "paper" && computerChoice == "rock":
                case playerChoice == "scissor" && computerChoice == "paper" :
                    playerPoints = playerPoints + 1;
                    return("You chose: " + playerChoice + "\nThe Computer chose: " + computerChoice + "\nYou win");
                    break;
                default:
                    computerPoints = computerPoints + 1;
                    return("You chose: " + playerChoice + "\nThe Computer chose: " + computerChoice + "\nYou lose");
            }
            
        }
        alert(play());
    }

    //evaluation of who the winner is after 5 rounds
    if (playerPoints > computerPoints) {
        return("Your Points: " + playerPoints + "\nComputer Points: " + computerPoints + "\nCongratulations, you Win");
    }
    else if (playerPoints < computerPoints) {
        return("Your Points: " + playerPoints + "\nComputer Points: " + computerPoints + "\nSad, you lose");
    }
    else {
        return("Your Points: " + playerPoints + "\nComputer Points: " + computerPoints + "\nIt is a tie");
    }
}

alert(playGame());




