import { assignExpressionValues } from './helpers/expression.js'
import { solutionValue } from './helpers/solutionValue.js'

const equalsButton = document.querySelector('.numpad__button.equals')

equalsButton.addEventListener('click', () => {
  const expression = {
    firstNumber: solutionValue() ? String(solutionValue()) : '',
    sign: '',
    secondNumber: '',
  }

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault()
      equalsButton.click()
  }
})
