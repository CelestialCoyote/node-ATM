"use strict";


const prompt = require('prompt-sync')();
const { account } = require('./account');


function getBalance() {
  return account.balance;
}

function withdraw(withdrawAmount) {
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
  //let isNumber = false;
  let pinToCheck = 0;

  let isNumber = /^\d+$/.test(enteredPin);
  pinToCheck = parseInt(enteredPin);

  while(numberOfTries > 0) {
    if(isNumber === false){
      numberOfTries--;
      let test = prompt(`Please enter only numbers between 0 and 9.\n${numberOfTries} attempts remaining.`);
      isNumber = /^\d+$/.test(test);
    } else if(pinToCheck !== account.pin) {
      numberOfTries--;
      prompt(`Incorrect PIN, please try again.\n${numberOfTries} attempts remaining.`);
      
    } else if(pinToCheck === account.pin) {
      //console.log(`PIN successfully entered.`);
      //flag = true;
      break;
    }
  }

  //if(numberOfTries == 0) {
  //  console.log(
  //    `You have exceeded the maximum number of trys.\nYour account has been locked for your security.\nPlease see branch manager to unlock account.\nHave a nice day.`
  //    );
  //} else {
  //  console.log(`PIN successfully entered.`);
  //  flag = true;
  //}

  console.log(`PIN successfully entered.`);
  flag = true;
  
  return flag;
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions
module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin
};
