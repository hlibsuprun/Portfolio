import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { currentStrNumber } from './helpers/currentStrNumber.js'

const backspaceButton = document.querySelector('.numpad__button.backspace')

backspaceButton.addEventListener('click', () => {
  const { sign, strSecondNumber } = expressionObject

  let strNumber = currentStrNumber()
    strNumber =
      isNaN(+strNumber[strNumber.length - 2]) && strNumber[strNumber.length - 2] !== '.'
      ? ''
      : strNumber.length
      ? strNumber.slice(0, -1)
      : '';

  const expression = 
    strSecondNumber
      ? { ...expressionObject, strSecondNumber: strNumber }
      : sign && strSecondNumber === ''
      ? { ...expressionObject, sign: '' }
      : { ...expressionObject, strFirstNumber: strNumber }

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
      event.preventDefault()
      backspaceButton.click()
  }
})
