#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin code",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Your pin code is correct!!!");

  let accountType = await inquirer.prompt([
    {
      name: "account",
      type: "list",
      message: "Select your account type",
      choices: ["Current", "Saving"]
    },
  ]);

  if (accountType.account === "Current" || accountType.account === "Saving") {
    console.log("Welcome to main Manu")
  };

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Please select option",
      choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
    },
  ]);

  console.log(operationAnswer);

  if (operationAnswer.operation === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter your amount",
      },
    ]);
    
     if(amountAnswer.amount > myBalance) {
      console.log("Insufficient balance");
     }
     else {
      myBalance -= amountAnswer.amount;
      console.log(`Transaction successfully...! Your current balance is: ${myBalance}`);
      console.log("Thank You!!!");
     }
  }
    if (operationAnswer.operation === "Balance Inquiry") {
      console.log(`Your current balance is: ${myBalance}`);
      console.log("Thank You!!!");
    } 

    if (operationAnswer.operation === "Fast Cash") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "selectAmount",
        type: "list",
        message: "Please select your amount",
        choices: ["500", "1000", "2000", "5000"],
      }
    ]);
   if (amountAnswer.selectAmount === "500"){
    myBalance -= amountAnswer.selectAmount;
    console.log(`Transaction successfully...! Your current balance is: ${myBalance}`);
  }
   else if (amountAnswer.selectAmount === "1000"){
    myBalance -= amountAnswer.selectAmount;
    console.log(`Transaction successfully...! Your current balance is: ${myBalance}`);
} 
   else if (amountAnswer.selectAmount === "2000"){
    myBalance -= amountAnswer.selectAmount;
    console.log(`Transaction successfully...! Your current balance is: ${myBalance}`);
} 
   else if (amountAnswer.selectAmount === "5000"){
    myBalance -= amountAnswer.selectAmount;
    console.log(`Transaction successfully...! Your current balance is: ${myBalance}`);
} 
console.log("Thank You!!!");
}
}else {
  console.log("Incorrect pin code!!!");
}
