console.log("Connected!");

// Ensure the DOM content is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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

/**
 * check answer against first element in the
 * returned calculateCorrectAnswer array
 * 
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("You got it right!");
        incrementScore();
    } else {
        alert(`Oh no, you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    incrementWrongAnswer();
    }

    // Continue the game with the next question
    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}


/**
 * get current sccore from DOM, add 1.
 * 
 */

// Update the score
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    // compound addition (++before) if after, the plus wouldn't be displayed until next.
}

/**
 * get tally of old score from DOM and add one.
 */
// Number of wrong tries
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    // Code to increment wrong answers
}

// Questions functions:
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {
    // Code to display subtraction question
}

function displayMultiplyQuestion() {
    // Code to display multiplication question
}
