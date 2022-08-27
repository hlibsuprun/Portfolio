import { Expression } from '@/stores/expression'

export class Ac {
  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: Expression = {
      firstNumber: '',
      sign: '',
      secondNumber: ''
    }

    return expression
  }
}
