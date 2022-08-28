import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

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
    let strNumber: string = this.currentNumber(this.expression)
    strNumber = strNumber
      ? strNumber.includes('%')
        ? strNumber.replace('%', '')
        : strNumber.concat('%')
      : strNumber

    const expression: Expression =
      this.expression.strSecondNumber || this.expression.sign
        ? { ...this.expression, strSecondNumber: strNumber }
        : { ...this.expression, strFirstNumber: strNumber }

    return expression
  }
}
