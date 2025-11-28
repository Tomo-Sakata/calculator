'use strict'

let firstOperand = "";
let secondOperand = "";
let operator = null;

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

//get first Operand number
const inputNumber = numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    if (operator === null){
      firstOperand += this.textContent;
      display.textContent = firstOperand;
    } else {
      secondOperand += this.textContent
      display.textContent = firstOperand + " " + operator + " " + secondOperand;
    }
  })
});

//display operator
const inputOperator = operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    if(firstOperand !== "" && operator === null){
      operator = this.textContent;
      display.textContent = firstOperand + " " + operator + " ";
    } 
  })
});

//display clear
const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", function () {
    display.textContent = "";
    resetOperand();
  });

// equal
equal.addEventListener("click", function () {
  if (firstOperand !== "" && secondOperand !== "" && operator !== null){
    switch (operator) {
    case "+":
      display.textContent = add(parseFloat(firstOperand), parseFloat(secondOperand));
      resetOperand();  
      break;
    }
  }
})

//reset operand and operator
function resetOperand () {
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

//funciton add
const add = function(a,b) {
return a + b;
};
