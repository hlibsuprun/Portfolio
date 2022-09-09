import { ExpressionState } from '../store/states/expression.state';
import { Button } from './Button';

export class Divide extends Button {
  expression: ExpressionState;
  solution: number;

  constructor(expression: ExpressionState, solution: number) {
    super();
    this.expression = expression;
    this.solution = solution;
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    const expression: ExpressionState = this.expression.strSecondNumber
      ? { strFirstNumber: String(this.solution), sign: '/', strSecondNumber: '' }
      : this.expression.strFirstNumber !== '0' && this.expression.strFirstNumber
      ? { ...this.expression, sign: '/' }
      : this.expression;

    return expression;
  }
}
