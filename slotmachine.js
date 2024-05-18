// inputting the prompt-sync module to allow user input
const prompt = require("prompt-sync")();

//constant variables for the slot machine
const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// a spin function to spin the slot machine
function spin() {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
}

spin();
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

// a funtion to get bet amount for each line
function getBetAmount(balance, lines) {
  while (true) {
    const bet = prompt("Enter bet amount for each line: ");
    const userBet = parseFloat(bet);
    if (isNaN(userBet) || userBet <= 0 || userBet > balance / lines) {
      console.log("Please enter a valid number");
    } else {
      return userBet;
    }
  }
}
let balance = deposit();
const lines = getNumberOfLines();
const bet = getBetAmount(balance, lines);
