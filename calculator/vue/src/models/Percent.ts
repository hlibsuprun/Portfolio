import { Button } from '@/models/Button'
import { Expression } from '@/types'

export class Percent extends Button {
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
    number = number
      ? number.includes('%')
        ? number.replace('%', '')
        : number.concat('%')
      : number

    const expression: Expression =
      this.expression.secondNumber || this.expression.sign
        ? { ...this.expression, secondNumber: number }
        : { ...this.expression, firstNumber: number }

    return expression
  }
}
