const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// Gets input from input field
function getUserInput() {
    return parseInt(userInput.value);
}



// Generates and writes calculation log
function createWriteOutput(operator, resultBefore, calcNumber) {
    const calculationDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription); //from vendor file
}

function writeToLog(operator, resultBefore, operationNumber, newResult) {
    const logEntry = {
        operation: operator,
        number1: resultBefore,
        number2: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}



// One function with IF statements for all operations
function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (calculationType !== "ADD" && 
        calculationType !== "SUBTRACT" && 
        calculationType !== "MULTIPLY" && 
        calculationType !== "DIVIDE" || 
        !enteredNumber) 
        {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    createWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}



// Functions for the 4 button operations
function addition() {
    calculateResult("ADD");
}

function subtraction() {
    calculateResult("SUBTRACT");
}

function multiplication() {
    calculateResult("MULTIPLY");
}

function division() {
    calculateResult("DIVIDE");
}



// Event listeners for buttons
addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);





