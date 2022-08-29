import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Reverse extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    let strNumber: string = this.currentStrNumber(this.expression)
    strNumber = strNumber.length && strNumber.includes('%')
        ? `${parseFloat(strNumber) * -1}%`
        : strNumber.length
        ? String(+strNumber * -1)
        : strNumber

    const expression: Expression =
      this.expression.strSecondNumber || this.expression.sign
        ? { ...this.expression, strSecondNumber: strNumber }
        : { ...this.expression, strFirstNumber: strNumber }

    return expression
  }
}
