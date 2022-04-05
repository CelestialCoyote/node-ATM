"use strict";


const prompt = require('prompt-sync')();
const { account } = require('./account');
const { getBalance, withdraw, deposit, validatePin } = require('./atm');


function accessATM() {
  if(validatePin(prompt('Please enter 4 digit pin number. #### - '))) {
    mainMenu();
  }
}

//TODO: Call accessATM function
accessATM();

function mainMenu() {
  // Print menu options to console.
  console.log(
    `Please select actions from menu.
    1. Get current balance.
    2. Make a deposit.
    3. Make a withdrawl.
    4. Restart.
    5. Quit.`
  );
  let choice = prompt('> ');

  while(choice !== '5') {
    switch (choice) {
      case '1':           // Get balance.
        let balance = getBalance();
        console.log(`Your current balance is: $${(balance).toFixed(2)}.`);
        console.log(`\nPlease choose next option.\n`);
        choice = prompt('> ');
        break;
      case '2':           // Get make deposit.
        console.log('How much would you like to deposit?');
        let depositAmount = parseInt(prompt('> '));
        deposit(depositAmount);
        console.log(`\nPlease choose next option.\n`);
        choice = prompt('> ');
        break;
      case '3':           // Get make withdrawl.
        console.log('How much would you like to withdrawl.');
        let withdrawAmount = prompt('> ');
        withdraw(withdrawAmount);
        console.log(`\nPlease choose next option.\n`);
        choice = prompt('> ');
        break;
      case '4':           // Restart.
        accessATM();
        break;
      case '5':           // Quit.
        break;
      default:
        console.log('\nNot a valid choice, please try again.');
        choice = prompt('> ');
    }
  }

  console.log(`Thank you for your business.\nHave a pleasant day.`);
}
