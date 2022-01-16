function add(a, b) {
  return +a + +b
}

function subtract(a, b) {
  return +a - +b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return (a / b).toFixed(3)
}

function operate(operator, a, b) {
  return operator(a, b)
}

//work with screen
const screen = document.querySelector('.screen');
const screenOperand = screen.querySelector('.screen-operand');
const screenResult = screen.querySelector('.screen-result');
const numButtons = document.querySelectorAll('.buttons-numbers .button');
const optionButtons = document.querySelectorAll('.buttons-screen .button');
const operationsButtons = document.querySelectorAll('.buttons-operations .button');

let firstNumber = '0';
let secondNumber;

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
//clean first second end result screen
function cleanScreen() {
  screenOperand.textContent = 0;
  firstNumber = '0';
  secondNumber = undefined;
  screenResult.textContent = '0 ='
  previousOp = undefined;
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
//operations 

function resetOperand() {
  firstNumber = '0';
  screenOperand.textContent = '0';
}

let previousOp;
let counter = 0;

function runOperate(op) {
  counter++
  console.log(op, previousOp, firstNumber, secondNumber, counter, ' start')
  if (!secondNumber) {
    secondNumber = firstNumber;
    screenResult.textContent = `${firstNumber} ${op}`
    previousOp = op;
    resetOperand();
    return
  } else {
    if (previousOp == "+") {
      secondNumber = `${operate(add, secondNumber, firstNumber )}`;
      screenResult.textContent = `${secondNumber} ${op}`;
      resetOperand();
      previousOp = op;
      return
    }
    if (previousOp == "-") {
      secondNumber = `${operate(subtract, secondNumber, firstNumber)}`;
      screenResult.textContent = `${secondNumber} ${op}`;
      resetOperand();
      previousOp = op
      return
    }
    if (previousOp == "*") {
      console.log(op, firstNumber, secondNumber, counter, previousOp, 'milti')
      secondNumber = `${operate(multiply, secondNumber, firstNumber)}`;
      screenResult.textContent = `${secondNumber} ${op}`;
      resetOperand();
      previousOp = op
      return
    }
    if (previousOp == "/") {
      console.log(op, firstNumber, secondNumber, counter, previousOp, ' divide')
      secondNumber = `${operate(divide, secondNumber, firstNumber)}`;
      screenResult.textContent = `${secondNumber} ${op}`;
      resetOperand();
      previousOp = op
      return
    }
    if (previousOp == "=") {
      screenResult.textContent = `${secondNumber} ${op}`;
      resetOperand();
      previousOp = op
      return
    }
  }

}

operationsButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const operator = e.target.textContent;
    runOperate(operator);

  })
})