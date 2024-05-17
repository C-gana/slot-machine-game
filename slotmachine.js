// inputting the prompt-sync module to allow user input
const prompt = require("prompt-sync")();

// a function to allow user deposit money to play slot machine
function deposit() {
  while (true) {
    const deposit = prompt(
      "Please enter the amount you would like to deposit: "
    );
    const userDeposit = parseFloat(deposit);
    if (isNaN(userDeposit) || userDeposit <= 0) {
      console.log("Please enter a valid number");
    } else {
      return userDeposit;
    }
  }
}

// a function to get number of lines that user bets on
function getNumberOfLines() {
  while (true) {
    const lines = prompt("Enter number of lines to bet on (1-3) ");
    const userLines = parseInt(lines);
    if (isNaN(userLines) || userLines <= 0 || userLines > 3) {
      console.log("Please enter a valid number");
    } else {
      return userLines;
    }
  }
}
const depositAmount = deposit();
const lines = getNumberOfLines();
console.log(
  `You have deposited: $${depositAmount}\nYou are betting on ${lines} lines`
);
