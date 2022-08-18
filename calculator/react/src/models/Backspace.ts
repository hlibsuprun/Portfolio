import { Expression } from '../App'
import { Button } from './Button'

export class Backspace extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * backspaceClickHandler
   */
  public backspaceClickHandler() {
    let number = this.currentNumber(this.expression)
    number =
      isNaN(+number[number.length - 2]) && number[number.length - 2] !== '.'
        ? ''
        : number.length
        ? number.slice(0, -1)
        : ''

    const expression: Expression = this.expression.secondNumber
      ? { ...this.expression, secondNumber: number }
      : this.expression.sign && this.expression.secondNumber === ''
      ? { ...this.expression, sign: '' }
      : { ...this.expression, firstNumber: number }

    return expression
  }
}