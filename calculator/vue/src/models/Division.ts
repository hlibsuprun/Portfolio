import { solution } from '@/helpers/solution'
import { Button } from '@/models/Button'
import { Expression } from '@/types/store/expression'

export class Division extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: Expression = this.expression.secondNumber
      ? {
          firstNumber: String(solution(this.expression)),
          sign: '/',
          secondNumber: ''
        }
      : +this.expression.firstNumber !== 0 && this.expression.firstNumber
      ? { ...this.expression, sign: '/' }
      : this.expression

    return expression
  }
}
