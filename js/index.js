console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorMessage = document.querySelector(".error");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    console.log("divider: ", a / b);
    errorMessage.innerText = "";
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  const divideErrorMessage =
    "Please pass a number rather than 0 as divisor, thank you!";
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    console.log(
      `${firstNumber} times ${secondNumber} equals to ${output.innerText}`
    );
  } catch (error) {
    console.log(divideErrorMessage);
    errorMessage.innerText = divideErrorMessage;
    output.innerText = "";
  }
});
