const defaultResult = 0;
let currentResult = defaultResult;

const logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, previousResult, inputValue) {
  const description = `${previousResult} ${operator} ${inputValue}`;
  outputResult(currentResult, description);
}

function writeLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: previousResult,
    userInput: operationNumber,
    currentResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const userInput = getUserInput();
  const previousResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += userInput;
    mathOperator = "+";
  } else if (calculationType == "SUBTRACT") {
    currentResult -= userInput;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= userInput;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= userInput;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, previousResult, userInput);
  writeLog(calculationType, previousResult, userInput, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
