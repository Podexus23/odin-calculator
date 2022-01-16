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
const numbers = document.querySelectorAll('.buttons-numbers .button')

let operand = 0;

function operandOnScreen(number) {
  if (operand == 0) {
    operand = number;
  } else {
    operand = `${operand}${number}`
  }
  let screenOperand = screen.querySelector('.screen-operand');
  screenOperand.textContent = operand;
}

numbers.forEach((num => num.addEventListener('click', (e) => {
  //turning off unused buttons in number category
  if (!isNaN(parseInt(e.target.textContent))) {
    console.log(e.target.textContent);
    operandOnScreen(e.target.textContent)
  } else {
    return
  }
})))