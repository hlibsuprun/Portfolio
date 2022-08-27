import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Plus extends Button {
  expression: Expression
  solution: number

  constructor(expression: Expression, solution: number) {
    super()
    this.expression = expression
    this.solution = solution
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: Expression = this.expression.secondNumber
      ? {
          firstNumber: String(this.solution),
          sign: '+',
          secondNumber: ''
        }
      : this.expression.firstNumber
      ? { ...this.expression, sign: '+' }
      : this.expression

    return expression
  }
}
