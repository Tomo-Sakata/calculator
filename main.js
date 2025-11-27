'use strict'

let firstOperand = "";
let secondOperand = "";
let operator = null;

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator");


//display number
const inputNumber = numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    display.textContent += this.textContent;
  })
});

//display operator
const inputOperator = operatorButtons.forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function () {
    firstOperand = display.textContent;
    operator = this.textContent;
    display.textContent = firstOperand + " " + operator + " ";
  })
});

//display clear
const clearButton = document.querySelector(".clear");
  clearButton.addEventListener("click", function () {
    display.textContent = "";
  });
  