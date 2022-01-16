function add(a, b) {
  return +a + +b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a - b
}

function operate(operator, a, b) {
  return operator(a, b)
}

console.log(operate(add, 2, 4))

//work with screen
const screen = document.querySelector('.screen');
const screenOperand = screen.querySelector('.screen-operand');
const numButtons = document.querySelectorAll('.buttons-numbers .button');
const optionButtons = document.querySelectorAll('.buttons-screen .button');
const operationsButtons = document.querySelectorAll('.buttons-operations .button');

let firstNumber = 0;
let secondNumber;
let operation;

function operandOnScreen(number) {
  if (firstNumber == 0) {
    firstNumber = number;
  } else {
    firstNumber = `${firstNumber}${number}`
  }
  screenOperand.textContent = firstNumber;
}

numButtons.forEach((num => num.addEventListener('click', (e) => {
  //turning off unused buttons in number category
  if (!isNaN(parseInt(e.target.textContent))) {
    operandOnScreen(e.target.textContent)
  } else {
    return
  }
})))
//only clean first number
function cleanScreen() {
  screenOperand.textContent = 0;
  firstNumber = 0;
}

function backspaceNumber() {
  firstNumber = firstNumber.slice(0, -1);
  if (firstNumber.length < 1 || firstNumber == 0) {
    firstNumber = '0';
  }
  screenOperand.textContent = firstNumber;
}

optionButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent.toLowerCase() == 'clear') {
      cleanScreen()
    }
    if (e.target.textContent.toLowerCase() == 'back') {
      backspaceNumber()
    }
  })
})