import { definitionOfNumber } from './helpers/definitionOfNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const pointButton = document.querySelector('.numpad__button.point')

pointButton.addEventListener('click', () => {
    const { sign, secondNumber } = expressionObject

    let number = definitionOfNumber()
    number = 
      number.slice(-1).includes('.')
        ? number.slice(0, -1)
        : number.includes('.')
        ? number
        : number.includes('%')
        ? number.replace('%', '').concat('.%')
        : number
        ? number.concat('.')
        : number

    const expression = 
      secondNumber || sign 
        ? { ...expressionObject, secondNumber: number } 
        : { ...expressionObject, firstNumber: number }

    assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '.') {
      event.preventDefault()
      pointButton.click()
  }
})
