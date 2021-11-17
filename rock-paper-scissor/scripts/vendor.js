const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  resultHandler(
    sum,
    "const sumUp = resultHandler (resultHandler, ...numbers) {}"
  );
};

const add = (resultHandler, pivot, offset, ...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number - offset;
  }
  resultHandler(
    sum * pivot,
    "const sumUp = resultHandler (resultHandler, pivot, offset, ...numbers) {}"
  );
};

const showResult = (result, resultString) => {
  console.log(`[INFO] RESULT : ${result} FUNCTION_CALL : ${resultString}\n`);
};

sumUp(showResult, 10, 20, 30, 40, 50, 60, 70);
add(
  (result, resultString) => {
    console.log(`[INFO] RESULT : ${result}, FUNCTION_CALL : ${resultString}\n`);
  },
  3.14,
  7,
  10,
  20,
  30
);

// This will give expected result
const subtract = function () {
  let sum = 0;
  for (const number of arguments) {
    sum -= number;
  }
  showResult(sum, "const subtract = function () {}");
};
subtract(10, 20, 30, 40, 50, 60, 70);

// This will not give expected result
// The function call will also get counted as an argument and output will be NaN
const difference = function (resultHandler) {
  let sum = 0;
  for (const number of arguments) {
    sum -= number;
  }
  resultHandler(sum, "const subtract = function (resultHandler) {}");
};
difference(showResult, 10, 20, 30, 40, 50, 60, 70);
