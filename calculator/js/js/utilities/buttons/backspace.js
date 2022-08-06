import { assignExpressionValues, expressionObject } from './helpers/expression.js'
import { definitionOfNumber } from './helpers/definitionOfNumber.js'

const backspaceButton = document.querySelector('.numpad__button.back')

backspaceButton.addEventListener('click', () => {
  const { sign, secondNumber } = expressionObject

  let number = definitionOfNumber()
    number = 
      isNaN(+number[number.length - 2]) && number[number.length - 2] !== '.'
      ? ''
      : number.length
      ? number.slice(0, -1)
      : '';

  const expression = 
    secondNumber
      ? { ...expressionObject, secondNumber: number }
      : sign && secondNumber === '' 
      ? { ...expressionObject, sign: '' }
      : { ...expressionObject, firstNumber: number }

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
      event.preventDefault()
      backspaceButton.click()
  }
})
