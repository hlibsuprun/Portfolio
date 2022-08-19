import { Expression } from '../App'
import { Button } from './Button'

export class Invert extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    let number = this.currentNumber(this.expression)
    number =
      number.length && number.includes('%')
        ? `${parseFloat(number) * -1}%`
        : number.length
        ? String(+number * -1)
        : number

    const expression: Expression =
      this.expression.secondNumber || this.expression.sign
        ? { ...this.expression, secondNumber: number }
        : { ...this.expression, firstNumber: number }

    return expression
  }
}
