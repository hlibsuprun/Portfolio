import { Expression } from '../app/slices/expressionSlice'
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
    let number = this.currentStrNumber(this.expression)
    number =
      number.length && number.includes('%')
        ? `${parseFloat(number) * -1}%`
        : number.length
        ? String(+number * -1)
        : number

    const expression: Expression =
      this.expression.strSecondNumber || this.expression.sign
        ? { ...this.expression, strSecondNumber: number }
        : { ...this.expression, strSecondNumber: number }

    return expression
  }
}
