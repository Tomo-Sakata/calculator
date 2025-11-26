'use strict'

//display number
const numberButtons = document.querySelectorAll(".number");
  const currentInput = numberButtons.forEach(function (numberButton) {
  numberButton.addEventListener("click", function () {
    const display = document.querySelector(".display");
    display.textContent += this.textContent;
  })
});

