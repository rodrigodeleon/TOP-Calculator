let calculator = document.querySelector("#calculator");
let buttons = document.querySelectorAll(".calcButton");
let display = document.querySelector("#calcDisplay");

let firstNumber;
let secondNumber;
let operator;
let result;

function clickButton(clickedButtonId) {
  if (display.innerHTML == "0") display.innerHTML = "";
  if (clickedButtonId == "equals") {
    setOperands(); // sets operands and operator into the variables
    result = operate(firstNumber, operator, secondNumber);
    display.innerHTML = result;
  } else if (clickedButtonId == "clear") {
    firstNumber, secondNumber, (result = "");
    display.innerHTML = 0;
  } else if (clickedButtonId == "backspace") {
    let str = display.innerHTML;
    display.innerHTML = str.substring(0, str.length - 1);
  } else display.innerHTML += clickedButtonId;
}

buttons.forEach((btn) =>
  btn.addEventListener("click", () => clickButton(btn.id))
);

function operate(numA, operator, numB) {
  if (operator == "+") return numA + numB;
  if (operator == "-") return numA - numB;
  if (operator == "x") return numA * numB;
  if (operator == "/") {
    if (numB == 0) {
      alert("its not possible to divide by 0");
      return 0;
    } else return numA / numB;
  }
}

function setOperands() {
  let myArray = display.innerHTML.split("");
  operator = myArray.find(
    (item) => item == "+" || item == "-" || item == "/" || item == "x"
  );
  operatorIndex = myArray.indexOf(operator);
  firstNumber = parseFloat(myArray.slice(0, operatorIndex).join(""));
  secondNumber = parseFloat(myArray.splice(operatorIndex + 1).join(""));
  firstNumber = Math.round(firstNumber+'e'+5)+'e-'+5; 
  secondNumber = Math.round(secondNumber+'e'+5)+'e-'+5; 
   
  //   console.log(`First number: ${firstNumber}, Second number: ${secondNumber}`);
}
