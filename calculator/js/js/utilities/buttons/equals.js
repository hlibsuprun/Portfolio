import { assignExpressionValues } from './helpers/expression.js'
import { solution } from './helpers/solution.js'

const equalsButton = document.querySelector('.numpad__button.equals')

equalsButton.addEventListener('click', () => {
  const expression = {
    strFirstNumber: solution() ? String(solution()) : '',
    sign: '',
    strSecondNumber: '',
  }

  assignExpressionValues(expression)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault()
      equalsButton.click()
  }
})
