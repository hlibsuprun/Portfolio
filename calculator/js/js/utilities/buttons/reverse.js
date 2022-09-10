import { currentStrNumber } from './helpers/currentStrNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const reverseButton = document.querySelector('.numpad__button.reverse')

reverseButton.addEventListener('click', () => {
  const { sign, strSecondNumber } = expressionObject

  let strNumber = currentStrNumber()
  strNumber =
    strNumber.length && strNumber.includes('%')
      ? `${parseFloat(strNumber) * -1}%`
      : strNumber.length
      ? String(+strNumber * -1)
      : strNumber

  const expression = 
    strSecondNumber || sign
      ? { ...expressionObject, strSecondNumber: strNumber }
      : { ...expressionObject, strFirstNumber: strNumber }

  assignExpressionValues(expression)
})
