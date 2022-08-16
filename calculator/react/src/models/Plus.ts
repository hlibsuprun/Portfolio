import { Expression } from '../App'
import { solutionCalculation } from '../components/helpers/solutionCalculation'
import { Button } from './Button'

export class Plus extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * plusClickHandler
   */
  public plusClickHandler() {
    const expression: Expression = this.expression.secondNumber
      ? {
          firstNumber: String(solutionCalculation(this.expression)),
          sign: '+',
          secondNumber: ''
        }
      : this.expression.firstNumber
      ? { ...this.expression, sign: '+' }
      : this.expression

    return expression
  }
}
