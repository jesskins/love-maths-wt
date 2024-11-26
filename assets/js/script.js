console.log("Connected!");

// Ensure the DOM content is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
    runGame("addition");
});

// Your function declarations below 

/**
 * creates the random numbers between 1-25 
 * the main game loop...
 * 
 */
function runGame(gameType) {
    // Code to run the game, 2 numbers between 1-25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    // Code to check the answer
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText); // Fixed duplicate declaration
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

// Update the score
function incrementScore() {
    // Code to increment score
}

// Number of wrong tries
function incrementWrongAnswer() {
    // Code to increment wrong answers
}

// Questions functions:
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1; // i.e. get number 1, display number 1
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {
    // Code to display subtraction question
}

function displayMultiplyQuestion() {
    // Code to display multiplication question
}
