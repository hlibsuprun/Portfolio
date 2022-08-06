import { assignExpressionValues } from "./helpers/expression.js"

const acButton = document.querySelector('.numpad__button.ac')

acButton.addEventListener('click', () => {
  const expression = {
    firstNumber: '',
    sign: '',
    secondNumber: '',
  }

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Delete') {
      event.preventDefault()
      acButton.click()
  }
})
