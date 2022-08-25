import { Button } from '@/models/Button'
import { dotAfterZero } from '@/models/helper/dotAfterZero'
import { Expression } from '@/types/store/expression'

export class Number extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler(value: string) {
    let number = this.currentNumber(this.expression)

    if (number.length <= 10) {
      number =
        number.length && (number === '0' || number === '0%')
          ? dotAfterZero(number, value)
          : number.includes('%')
          ? number.replace('%', '').concat(value, '%')
          : number.concat(value)

      const expression: Expression =
        this.expression.secondNumber || this.expression.sign
          ? { ...this.expression, secondNumber: number }
          : { ...this.expression, firstNumber: number }

      return expression
    }

    return this.expression
  }
}
