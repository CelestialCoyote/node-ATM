"use strict";


const prompt = require('prompt-sync')();
const { account } = require('./account');
const { getBalance, withdraw, deposit, validatePin } = require('./atm');

//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  if(validatePin(prompt('Please enter 4 digit pin number. #### - '))) {
    mainMenu();
  }
}

//TODO: Call accessATM function
//accessATM();

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit

  console.log(
    `Please select actions from menu.\n
    1. Get current balance.\n
    2. Make a deposit.\n
    3. Make a withdrawl.\n
    4. Restart.\n
    5. Quit.\n`
  );
  let choice = prompt('> ');

  while(choice !== '5') {
    switch (choice) {
      case '1':           // Get balance.
        console.log(`Your current balance is: $${account.balance}.`);
        console.log(`Please choose next option.\n`);
        choice = prompt('> ');
        break;
      case '2':           // Get make deposit.
        console.log('You chose make deposit.');
        console.log(`Please choose next option.\n`);
        choice = prompt('> ');
        break;
      case '3':           // Get make withdrawl.
        console.log('You chose make withdrawl.');
        console.log(`Please choose next option.\n`);
        choice = prompt('> ');
        break;
      case '4':           // Restart.
        console.log('You chose restart.');
        console.log(`Please choose next option.\n`);
        choice = prompt('> ');
        break;
      case '5':           // Quit.
        //console.log('You chose quit.');
        break;
      default:
        console.log('Not a valid choice, please try again.');
        choice = prompt('> ');
    }
  }

  console.log(`Thank you for your business.\nHave a pleasant day.`)
  
}

//TODO: Call mainMenu function to start our app!
mainMenu();
