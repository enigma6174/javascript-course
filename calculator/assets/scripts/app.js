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

function add() {
  const userInput = getUserInput();
  const previousResult = currentResult;
  currentResult = currentResult + userInput;
  createAndWriteOutput("+", previousResult, userInput);
  writeLog("ADD", previousResult, userInput, currentResult);
}

function subtract() {
  const userInput = getUserInput();
  const previousResult = currentResult;
  currentResult = currentResult - userInput;
  createAndWriteOutput("-", previousResult, userInput);
  writeLog("SUBTRACT", previousResult, userInput, currentResult);
}

function multiply() {
  const userInput = getUserInput();
  const previousResult = currentResult;
  currentResult = currentResult * userInput;
  createAndWriteOutput("*", previousResult, userInput);
  writeLog("MULTIPLY", previousResult, userInput, currentResult);
}

function divide() {
  const userInput = getUserInput();
  const previousResult = currentResult;
  currentResult = currentResult / userInput;
  createAndWriteOutput("/", previousResult, userInput);
  writeLog("DIVIDE", previousResult, userInput, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
