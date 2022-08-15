import { Expression } from '../App'

export class Button {
  expression: Expression

  constructor(expression: Expression) {
    this.expression = expression
  }

  /**
   * ac
   */
  ac() {
    const expression: Expression = {
      firstNumber: '',
      sign: '',
      secondNumber: '',
      solution: 0
    }

    return expression
  }
}
