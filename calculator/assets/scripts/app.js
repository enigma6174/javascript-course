const ADD = { operation: "ADD", operator: "+" };
const SUBTRACT = { operation: "SUBTRACT", operator: "-" };
const MULTIPLY = { operation: "MULTIPLY", operator: "*" };
const DIVIDE = { operation: "DIVIDE", operator: "/" };

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

function calculate(operation) {
  const userInput = getUserInput();
  const previousResult = currentResult;
  let operator;

  if (operation === ADD.operation) {
    currentResult += userInput;
    operator = ADD.operator;
  } else if (operation === SUBTRACT.operation) {
    currentResult -= userInput;
    operator = SUBTRACT.operator;
  } else if (operation === MULTIPLY.operation) {
    currentResult *= userInput;
    operator = MULTIPLY.operator;
  } else if (operation === DIVIDE.operation) {
    currentResult /= userInput;
    operator = DIVIDE.operator;
  }
  createAndWriteOutput(operator, previousResult, userInput);
  writeLog(operation, previousResult, userInput, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
