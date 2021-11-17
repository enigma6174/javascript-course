const POSITIVE_SUM = "+";
const NEGATIVE_SUM = "-";
const PRODUCT = "*";

const mathFunction = (displayResult, operator, ...numbers) => {
  let result = 0;
  if (operator === POSITIVE_SUM) {
    for (const number of numbers) {
      result += number;
    }
  } else if (operator === NEGATIVE_SUM) {
    for (const number of numbers) {
      result -= number;
    }
  } else if (operator === PRODUCT) {
    result = 1;
    for (const number of numbers) {
      result *= number;
    }
  } else {
    return result;
  }
  displayResult(result);
};

const displayResult = (message, result) => {
  console.log(`[INFO] ${message} ${result}`);
};

// Using bind() function to calculate positive sum
mathFunction(
  displayResult.bind(this, "Positive Sum Result Is : "),
  "+",
  10,
  20,
  30,
  40,
  50
);

// Using bind() function to calculate negative sum
mathFunction(
  displayResult.bind(this, "Negative Sum Result Is : "),
  "-",
  10,
  20,
  30,
  40,
  50
);

// Using bind() function to calculate product
mathFunction(
  displayResult.bind(this, "Product Result Is : "),
  "*",
  10,
  20,
  30,
  40,
  50
);
