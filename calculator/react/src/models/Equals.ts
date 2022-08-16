import { Expression } from '../App'
import { solutionCalculation } from '../components/helpers/solutionCalculation'
import { Button } from './Button'

export class Equals extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * equalsClickHandler
   */
  public equalsClickHandler() {
    const expression: Expression = {
      firstNumber: solutionCalculation(this.expression)
        ? String(solutionCalculation(this.expression))
        : '',
      sign: '',
      secondNumber: ''
    }

    return expression
  }
}
