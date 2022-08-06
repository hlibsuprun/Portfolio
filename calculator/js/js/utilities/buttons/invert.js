import { definitionOfNumber } from './helpers/definitionOfNumber.js'
import { assignExpressionValues, expressionObject } from './helpers/expression.js'

const invertButton = document.querySelector('.numpad__button.invert')

invertButton.addEventListener('click', () => { 
  const { sign, secondNumber } = expressionObject

  let number = definitionOfNumber()
  number = 
    number.length && number.includes('%')
      ? `${parseFloat(number) * -1}%`
      : number.length
      ? String(+number * -1) 
      : number

  const expression = 
    secondNumber || sign 
      ? { ...expressionObject, secondNumber: number } 
      : { ...expressionObject, firstNumber: number }
  
  assignExpressionValues(expression)
})
