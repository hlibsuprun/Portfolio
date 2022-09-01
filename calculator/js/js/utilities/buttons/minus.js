import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { solution } from './helpers/solution.js'

const minusButton = document.querySelector('.numpad__button.minus')

minusButton.addEventListener('click', () => { 
  const { strFirstNumber, strSecondNumber } = expressionObject

  const expression = 
    strSecondNumber
      ? { strFirstNumber: String(solution()), sign: '-', strSecondNumber: '' }
      : strFirstNumber
      ? { ...expressionObject, sign: '-' }
      : expressionObject

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '-') {
      event.preventDefault()
      minusButton.click()
  }
})
