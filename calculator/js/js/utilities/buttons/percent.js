import { currentStrNumber } from './helpers/currentStrNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const percentButton = document.querySelector('.numpad__button.percent')

percentButton.addEventListener('click', () => { 
  const { sign, strSecondNumber } = expressionObject

  let strNumber = currentStrNumber()
  strNumber = strNumber
    ? strNumber.includes('%')
      ? strNumber.replace('%', '')
      : strNumber.concat('%')
    : strNumber

  const expression = 
    strSecondNumber || sign
      ? { ...expressionObject, strSecondNumber: strNumber }
      : { ...expressionObject, strFirstNumber: strNumber }
  
  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '%') {
      event.preventDefault()
      percentButton.click()
  }
})
