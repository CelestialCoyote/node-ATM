"use strict";


const prompt = require('prompt-sync')();
const { account } = require('./account');


function getBalance() {
  return account.balance;
}

function withdraw(withdrawAmount) {
  if(withdrawAmount > account.balance) {
    let newAmount = prompt('Insufficient funds for withdrawl.\nPlease enter new amount to withdraw.\n');
    withdraw(newAmount);
  } else {
    account.balance -= withdrawAmount;
    console.log(`You have $${account.balance} remaining in your account.50`)
  }
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  account.balance += depositAmount;
  console.log(`New account balance after $${depositAmount} is $${account.balance}`);

  return account.balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  let numberOfTries = 3;
  let flag = false;

  while(numberOfTries > 1) {
    let isNumber = !isNaN(enteredPin);
    let pinToCheck = parseInt(enteredPin);

    if(isNumber === false){
      numberOfTries--;
      enteredPin = prompt(`Please enter only numbers between 0 and 9.\n${numberOfTries} attempt(s) remaining.\n`);
    } else if(pinToCheck !== account.pin) {
      numberOfTries--;
      enteredPin = prompt(`Incorrect PIN, please try again.\n${numberOfTries} attempt(s) remaining.\n`);
    } else if(pinToCheck === account.pin) {
      console.log(`PIN successfully entered.`);
      flag = true;
      break;
    }
  }

  if(numberOfTries == 1) {
    console.log(
      `You have exceeded the maximum number of trys.\nYour account has been locked for your security.\nPlease see branch manager to unlock account.\nHave a nice day.`
      );
  }
  
  // Return boolean true if pin is correct, or false
  // if number of tries has been exceeded. 
  return flag;
}

// Export these functions
module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin
};
