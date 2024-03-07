console.log("Hello World")

const selection = ["rock", "scissor", "paper"];

function getComputerChoice(){
    let getNumber = Math.floor(Math.random() * 3);
    let computerSelection = selection[getNumber];
    return computerSelection;
}

const computerSelection = getComputerChoice();
console.log(computerSelection)

const getPlayerChoice = prompt("Choose Rock, Scissor or Paper");
const playerSelection = getPlayerChoice.toLowerCase();

console.log(playerSelection)

new FileSystem
    




