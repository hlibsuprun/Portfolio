import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { pointAfterZero } from './helpers/pointAfterZero.js'
import { currentStrNumber } from './helpers/currentStrNumber.js'

const numberButtons = document.querySelectorAll('.numpad__button.number')

for(const button of numberButtons) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const strEnteredNumber = event.target.innerHTML
    
    const { sign, strSecondNumber } = expressionObject

    let strNumber = currentStrNumber()

    if (strNumber.replace(/\D+/g, '').length < 5) {
      strNumber =
        strNumber.length && (strNumber === '0' || strNumber === '0%')
          ? pointAfterZero(strNumber, strEnteredNumber)
          : strNumber.includes('%')
          ? strNumber.replace('%', '').concat(strEnteredNumber, '%')
          : strNumber.concat(strEnteredNumber)

      const expression = 
        strSecondNumber || sign
          ? { ...expressionObject, strSecondNumber: strNumber }
          : { ...expressionObject, strFirstNumber: strNumber }

      assignExpressionValues(expression)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === button.innerHTML) {
      button.click()
    }
  })
}
