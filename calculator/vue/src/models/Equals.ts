import { Button } from '@/models/Button'
import { Expression } from '@/stores/expression'

export class Equals extends Button {
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
    const expression: Expression = {
      strFirstNumber: this.solution ? String(this.solution) : '',
      sign: '',
      strSecondNumber: ''
    }

    return expression
  }
}
