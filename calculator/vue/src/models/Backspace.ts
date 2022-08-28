import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Backspace extends Button {
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
    strNumber = isNaN(+strNumber[strNumber.length - 2]) && strNumber[strNumber.length - 2] !== '.'
        ? ''
        : strNumber.length
        ? strNumber.slice(0, -1)
        : ''

    const expression: Expression = this.expression.strSecondNumber
      ? { ...this.expression, strSecondNumber: strNumber }
      : this.expression.sign && this.expression.strSecondNumber === ''
      ? { ...this.expression, sign: '' }
      : { ...this.expression, strFirstNumber: strNumber }

    return expression
  }
}
