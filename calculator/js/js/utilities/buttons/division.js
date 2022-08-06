import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { solutionValue } from './helpers/solutionValue.js'

const divisionButton = document.querySelector('.numpad__button.division')

divisionButton.addEventListener('click', () => { 
  const { firstNumber, secondNumber } = expressionObject

  const expression = 
    secondNumber
      ? { firstNumber: String(solutionValue()), sign: '/', secondNumber: '' }
      : Math.round(firstNumber) !== '0' && firstNumber
      ? { ...expressionObject, sign: '/' }
      : expressionObject

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '/') {
      event.preventDefault()
      divisionButton.click()
  }
})
