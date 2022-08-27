import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Point extends Button {
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
    number = number.slice(-1).includes('.')
      ? number.slice(0, -1)
      : number.includes('.')
      ? number
      : number.includes('%')
      ? number.replace('%', '').concat('.%')
      : number
      ? number.concat('.')
      : number

    const expression: Expression =
      this.expression.secondNumber || this.expression.sign
        ? { ...this.expression, secondNumber: number }
        : { ...this.expression, firstNumber: number }

    return expression
  }
}
