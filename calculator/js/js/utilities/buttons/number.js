import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { dotAfterZero } from './helpers/dotAfterZero.js'
import { definitionOfNumber } from './helpers/definitionOfNumber.js'

const numberButtons = document.querySelectorAll('.numpad__button.number')

for(const button of numberButtons) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    const value = event.target.innerHTML
    
    const { sign, secondNumber } = expressionObject

    let number = definitionOfNumber()

    if (number.length < 4) {
      number = 
        number.length && (number === '0' || number === '0%')
          ? dotAfterZero(number, value)
          : number.includes('%')
          ? number.replace('%', '').concat(value, '%')
          : number.concat(value)

      const expression = 
        secondNumber || sign 
          ? { ...expressionObject, secondNumber: number } 
          : { ...expressionObject, firstNumber: number }

      assignExpressionValues(expression)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === button.innerHTML) {
      button.click()
    }
  })
}
