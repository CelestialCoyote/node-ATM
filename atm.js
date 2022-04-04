"use strict";


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
  let flag = false;
  let userPin = enteredPin;
  let isNum = /^\d+$/.test(userPin);

  if(isNum == false){
    console.log('Please enter only numbers between 0 and 9.');
  } else {
    console.log(isNum);
  }

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
