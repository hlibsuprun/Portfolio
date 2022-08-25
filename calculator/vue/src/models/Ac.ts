import { Expression } from '@/types/store/expression'

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
