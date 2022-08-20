const operationDisplay = document.querySelector('.operation-display')
const valueField = document.getElementById('value')
valueField.focus()
const buttons = document.querySelectorAll('.key-btn')
const backspace = document.getElementById('backspace')

let operator1 = ''
let operator2 = ''
let operation = ''
let result = ''

function apagar() {
  valueField.value = valueField.value.substring(0, valueField.value.length - 1)
}

backspace.addEventListener('click', apagar)


buttons.forEach((keyBtn) => {
  keyBtn.addEventListener("click", (event) => {
    const value = event.target.innerText;

    if (+value >= 0 || value === ".") {
      valueField.value += value
    } else {
      switch (value) {
        case "+":
          operationDisplay.innerText += valueField.value + ' + '
          if (operator1 === '') {
            operator1 = parseInt(valueField.value)
            operation = '+'
          }
          valueField.value = ''
          valueField.focus()
          break
        case "-":
          operationDisplay.innerText += valueField.value + ' - '
          if (operator1 === '') {
            operator1 = parseInt(valueField.value)
            operation = '-'
          }
          valueField.value = ''
          valueField.focus()
          break
        case "x":
          operationDisplay.innerText += valueField.value + ' x '
          if (operator1 === '') {
            operator1 = parseInt(valueField.value)
            operation = 'x'
          }
          valueField.value = ''
          valueField.focus()
          break
        case "/":
          operationDisplay.innerText += valueField.value + ' / '
          if (operator1 === '') {
            operator1 = parseInt(valueField.value)
            operation = '/'
          }
          valueField.value = ''
          valueField.focus()
          break;
        case "C":
          valueField.value = ''
          operationDisplay.innerText = ''
          break;
        case "=":
          operationDisplay.innerText += ' ' + valueField.value + ' = '
          operator2 = parseInt(valueField.value)
          if (operation == '+') {
            result = operator1 + operator2
          } else if (operation == '-') {
            result = operator1 - operator2
          } else if (operation == 'x') {
            result = operator1 * operator2
          } else if (operation == '/' && operator2 != 0) {
            result = operator1 / operator2
          }
          valueField.value = result
          operator1 = ''
          operator2 = ''
          result = ''
          operation = ''
          break;
        default:
          return;
      }
    }
  });
});

//.substring(0, valueField.value.length)
// if (digit === "." && this.currentOperationText.innerText.includes(".")) {
//   return;
// }
