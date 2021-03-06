// select all the buttons
const buttons = document.querySelectorAll("button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");

// add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// calculate function

function calculate(event) {
  let buttonvalue = event.target.value;

  if (display.value === "0") {
    display.value = "";
  }
  if (buttonvalue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (buttonvalue === "C") {
    display.value = "0";
  } else {
    display.value += buttonvalue;
  }
}
/*
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  if (display.value === "0") {
    display.value = "";
  }

  if (clickedButtonValue === "=") {
    // check if the display is not empty then only do the calculation
    if (display.value !== "") {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    // clear everything on display
    display.value = "0";
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}*/
