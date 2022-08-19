import { Expression } from '../App'
import { solutionCalculation } from '../helpers/solutionCalculation'
import { Button } from './Button'

export class Minus extends Button {
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
          firstNumber: String(solutionCalculation(this.expression)),
          sign: '-',
          secondNumber: ''
        }
      : this.expression.firstNumber
      ? { ...this.expression, sign: '-' }
      : this.expression

    return expression
  }
}
