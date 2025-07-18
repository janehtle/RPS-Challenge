const choices = ["ROCK", "PAPER", "SCISSOR"]; //create an array of choices
const playerDisplay = document.getElementById("playerDisplay");
const aiDisplay = document.getElementById("aiDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

    const aiChoice = choices[Math.floor(Math.random() * 3)]; //will randomize AI's choice from array - round to nearest whole
    let result = ""; //empty string

    if(playerChoice === aiChoice){ //compare datatype AND value
        result = "It's a TIE!";
    }
    else{
        switch(playerChoice){
            case "ROCK":
                result = (aiChoice === "SCISSOR") ? "YOU WIN!" : "YOU LOSE!"; //ternary operators
                break;
            case "PAPER":
                result = (aiChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "SCISSOR":
                result = (aiChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                break; //break from this case switch
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    aiDisplay.textContent = `OPPONENT: ${aiChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
    }
}