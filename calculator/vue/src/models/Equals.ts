import { solution } from '@/helpers/solution'
import { Button } from '@/models/Button'
import { Expression } from '@/types/store/expression'

export class Equals extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: Expression = {
      firstNumber: solution(this.expression)
        ? String(solution(this.expression))
        : '',
      sign: '',
      secondNumber: ''
    }

    return expression
  }
}
