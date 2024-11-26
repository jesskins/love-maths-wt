console.log("Connected!");

// Ensure the DOM content is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {  // Correct variable in the loop
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {  // Corrected 'thiss' typo
                alert("You clicked Submit");  // Corrected typo "Submut" to "Submit"
            } else {
                let gameType = this.getAttribute("data-type");  // Corrected variable declaration
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
    let num1 = math.floor(Math.random() * 25) + 1;
    let num2 = math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion (num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    
    }
    }
}

function checkAnswer() {
    // Code to check the answer
}

function calculateCorrectAnswer() {
    // Code to calculate the correct answer
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
    document.getElementById("operand1").textContent = operand1; // i.e. get number 1, display nunber 1
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";


    // Code to display addition question
}

function displaySubtractQuestion() {
    // Code to display subtraction question
}

function displayMultiplyQuestion() {
    // Code to display multiplication question
}
