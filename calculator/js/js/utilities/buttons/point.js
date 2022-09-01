import { currentStrNumber } from './helpers/currentStrNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const pointButton = document.querySelector('.numpad__button.point')

pointButton.addEventListener('click', () => {
    const { sign, strSecondNumber } = expressionObject

    let strNumber = currentStrNumber()
    strNumber =
      strNumber.slice(-1).includes('.')
        ? strNumber.slice(0, -1)
        : strNumber.includes('.')
        ? strNumber
        : strNumber.includes('%')
        ? strNumber.replace('%', '').concat('.%')
        : strNumber
        ? strNumber.concat('.')
        : strNumber

    const expression = 
      strSecondNumber || sign
        ? { ...expressionObject, strSecondNumber: strNumber }
        : { ...expressionObject, strFirstNumber: strNumber }

    assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '.') {
      event.preventDefault()
      pointButton.click()
  }
})
