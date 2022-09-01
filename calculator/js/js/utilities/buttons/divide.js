import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { solution } from './helpers/solution.js'

const divideButton = document.querySelector('.numpad__button.divide')

divideButton.addEventListener('click', () => {
  const { strFirstNumber, strSecondNumber } = expressionObject

  const expression = 
    strSecondNumber
      ? { strFirstNumber: String(solution()), sign: '/', strSecondNumber: '' }
      : Math.round(strFirstNumber) !== '0' && strFirstNumber
      ? { ...expressionObject, sign: '/' }
      : expressionObject

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '/') {
      event.preventDefault()
      divideButton.click()
  }
})
