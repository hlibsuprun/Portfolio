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
  public clickHandler(num: string) {
    let number = this.currentNumber(this.expression)

    if (String(number.match(/\d/)).length < 5) {
      number =
        number.length && number.match(/^[0%]+$/)
          ? pointAfterZero(number, num)
          : number.includes('%')
          ? number.replace('%', '').concat(num, '%')
          : number.concat(num)

      const expression: Expression =
        this.expression.secondNumber || this.expression.sign
          ? { ...this.expression, secondNumber: number }
          : { ...this.expression, firstNumber: number }

      return expression
    }

    return this.expression
  }
}
