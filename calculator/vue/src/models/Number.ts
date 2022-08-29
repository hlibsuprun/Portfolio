import { Button } from '@/models/Button'
import { pointAfterZero } from '@/models/helper/pointAfterZero'
import { Expression } from '@/stores/expression'

export class Number extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler(strEnteredNumber: string) {
    let strNumber: string = this.currentStrNumber(this.expression)

    if (strNumber.replace(/\D+/g, '').length < 10) {
      strNumber = strNumber.length && strNumber.match(/^[0%]+$/)
        ? pointAfterZero(strNumber, strEnteredNumber)
        : strNumber.includes('%')
        ? strNumber.replace('%', '').concat(strEnteredNumber, '%')
        : strNumber.concat(strEnteredNumber)

      const expression: Expression =
        this.expression.strSecondNumber || this.expression.sign
          ? { ...this.expression, strSecondNumber: strNumber }
          : { ...this.expression, strFirstNumber: strNumber }

      return expression
    }

    return this.expression
  }
}
