import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Division extends Button {
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
    const expression: Expression = this.expression.strSecondNumber
      ? { strFirstNumber: String(this.solution), sign: '/', strSecondNumber: '' }
      : this.expression.strFirstNumber !== '0' && this.expression.strFirstNumber
      ? { ...this.expression, sign: '/' }
      : this.expression

    return expression
  }
}
