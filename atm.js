"use strict";


const prompt = require('prompt-sync')();
const { account } = require('./account');


function getBalance() {
  return account.balance;
}

function withdraw(withdrawAmount) {
  if(withdrawAmount > account.balance) {
    console.log('Insufficient funds for withdrawl.\nPlease enter new amount to withdraw.\n');
    let newAmount = prompt('> ');
    withdraw(newAmount);
  } else {
    account.balance -= withdrawAmount;
    console.log(`You have $${account.balance} remaining in your account.\n`);
  }
}

function deposit(depositAmount) {
  account.balance += depositAmount;
  console.log(`New account balance after $${depositAmount} deposit is $${account.balance}.\n`);

  return account.balance
}

function validatePin(enteredPin) {
  let numberOfTries = 3;
  let flag = false;

  while(numberOfTries > 1) {
    let isNumber = !isNaN(enteredPin);
    let pinToCheck = parseInt(enteredPin);

    if(isNumber === false){
      numberOfTries--;
      console.log(`Please enter only numbers between 0 and 9.\n${numberOfTries} attempt(s) remaining.\n`)
      enteredPin = prompt('> ');
    } else if(pinToCheck !== account.pin) {
      numberOfTries--;
      console.log(`Incorrect PIN, please try again.\n${numberOfTries} attempt(s) remaining.\n`)
      enteredPin = prompt('> ');
    } else if(pinToCheck === account.pin) {
      console.log(`\nPIN successfully entered.\n`);
      flag = true;
      break;
    }
  }

  // Print console message that number of tries has been exceeded.
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
