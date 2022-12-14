import { Expression } from '../app/slices/expressionSlice'
import { Button } from './Button'

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
    let strNumber: string = this.currentStrNumber(this.expression)
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
