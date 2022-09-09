import { ExpressionState } from '../store/states/expression.state';

export class Ac {
  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: ExpressionState = { strFirstNumber: '', sign: '', strSecondNumber: '' };

    return expression;
  }
}
