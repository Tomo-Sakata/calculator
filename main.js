'use strict'

let firstOperand = "";
let secondOperand = "";
let result = "";
let operator = null;
let isResultDisplayed = false;

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

//decimal
decimal.addEventListener("click", function () {
  if(!firstOperand.includes(".") && operator === null){
  firstOperand = firstOperand === "" ? "0." : firstOperand + ".";     
  display.textContent = firstOperand;
  } else if (operator !== null && !secondOperand.includes(".")){
    secondOperand = secondOperand === "" ? "0." : secondOperand + ".";     
    display.textContent = firstOperand + " " + operator + " " + secondOperand;
  }
});

//get first Operand number
const inputNumber = numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    if (operator === null && isResultDisplayed === false){
      firstOperand += this.textContent;
      display.textContent = firstOperand;
    } 
    else if (operator !== null){
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
function operate (operator, a, b) { 
  switch (operator) {
  case "+":
    return add(parseFloat(a), parseFloat(b));
  case "-":
    return subtract(parseFloat(a), parseFloat(b));
  case "×":
    return multiply(parseFloat(a), parseFloat(b));
  case "÷":
    return division(parseFloat(a), parseFloat(b));
  }
};

equal.addEventListener("click", function () {
  if (firstOperand !== "" && secondOperand !== "" && operator !== null){
    result = operate(operator, firstOperand, secondOperand)
    display.textContent = result;
    resetOperand();  
    firstOperand = result;
    isResultDisplayed = true;
  }
})

//reset operand and operator
function resetOperand () {
  firstOperand = "";
  secondOperand = "";
  operator = null;
  isResultDisplayed = false;
}

// add, subtract, multiply, division method
const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const division = function(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error";
  }
}
