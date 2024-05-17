// inputting the prompt-sync module to allow user input
const prompt = require("prompt-sync")();

// a function to allow user deposit money to play slot machine
const deposit = () => {
  while (true) {
    let depositAmount = Number(
      prompt("Please enter the amount you would like to deposit: ")
    );
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Please enter a valid number");
    } else {
      return depositAmount;
    }
  }
};

let depositAmount = deposit();

console.log(
  `You have deposited $${depositAmount} to play the slot machine game`
);
