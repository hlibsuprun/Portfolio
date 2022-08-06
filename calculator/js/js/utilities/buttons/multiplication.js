import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { solutionValue } from './helpers/solutionValue.js'

const multiplicationButton = document.querySelector('.numpad__button.multiplication')

multiplicationButton.addEventListener('click', () => {
  const { firstNumber, secondNumber } = expressionObject

  const expression = 
    secondNumber
      ? { firstNumber: String(solutionValue()), sign: '*', secondNumber: '' }
      : firstNumber
      ? { ...expressionObject, sign: '*' }
      : expressionObject

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '*') {
      event.preventDefault()
      multiplicationButton.click()
  }
})
