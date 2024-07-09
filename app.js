/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/




let value1 = null;
let operator = null;
let value2 = null;
let answer = null;

const display = document.querySelector('.display');

const updateDisplay = (content) => {
  display.textContent = content

};

const calculations = () => {
const num1 = parseFloat(value1)
const num2 = parseFloat(value2)
switch (operator) {
  case '+': 
    answer = num1 + num2;
    break;
  case '-': 
    answer = num1 - num2;
    break;    
  case '/': 
    answer = num1 / num2;
    break;
  case '*': 
    answer = num1 * num2;
    break;

  default: 
    return  
}
value1 = answer;
value2 = null;
operator = null; 

 
};


calculator.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('number')) {
    if (operator === null) {
      value1 = (value1 === null) ? target.textContent : value1 + target.textContent;
      updateDisplay(value1);
    } else {
      value2 = (value2 === null) ? target.textContent : value2 + target.textContent;
      updateDisplay(value2);
    }
    return;
  }

  if (target.classList.contains('operator')) {
    if (value1 !== null && value2 !== null) {
      calculations();
      updateDisplay(answer);
    }
    operator = target.textContent;
    updateDisplay(operator)
    return;
  }

  if (target.classList.contains('equals')) {
    if (value1 !== null && operator !== null && value2 !== null) {
      calculations();
      updateDisplay(answer);
    }

    return;
  }
  if (target.classList.contains('clear'))
    value1 = null; 
    value2 = null;
    answer = null;
    operator = null;
    updateDisplay('0')

});

