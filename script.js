const choices = ["ROCK", "PAPER", "SCISSOR"]; //create an array of choices
const playerDisplay = document.getElementById("playerDisplay");
const aiDisplay = document.getElementById("aiDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const restart = document.getElementById("restart");

function playGame(playerChoice){

    const aiChoice = choices[Math.floor(Math.random() * 3)]; //will randomize AI's choice from array - round to nearest whole
    let result = ""; //empty string

    if(playerChoice === aiChoice){ //compare datatype AND value
        console.log(`${playerChoice} : ${aiChoice}`);
        result = "It's a TIE!";
    }
    else{
        switch(playerChoice){
            case "ROCK":
                console.log(`${playerChoice} : ${aiChoice}`);
                result = (aiChoice === "SCISSOR") ? "YOU WIN!" : "YOU LOSE!"; //ternary operators
                break;
            case "PAPER":
                console.log(`${playerChoice} : ${aiChoice}`);
                result = (aiChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "SCISSOR":
                console.log(`${playerChoice} : ${aiChoice}`);
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

// RESET GAME
restart.addEventListener("click", (reset)); //eventlistener where function is called when btn clicked

function reset() {
    playerDisplay.textContent = `PLAYER:`;
    aiDisplay.textContent = `OPPONENT:`;
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");
}
