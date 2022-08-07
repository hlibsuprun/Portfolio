import { definitionOfNumber } from './helpers/definitionOfNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const percentButton = document.querySelector('.numpad__button.percent')

percentButton.addEventListener('click', () => { 
  const { sign, secondNumber } = expressionObject

  let number = definitionOfNumber()
  number = number
    ? number.includes('%')
      ? number.replace('%', '')
      : number.concat('%')
    : number

  const expression = 
    secondNumber || sign 
      ? { ...expressionObject, secondNumber: number } 
      : { ...expressionObject, firstNumber: number }
  
  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === '%') {
      event.preventDefault()
      percentButton.click()
  }
})
