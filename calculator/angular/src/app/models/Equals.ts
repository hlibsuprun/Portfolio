import { ExpressionState } from '../store/states/expression.state';
import { Button } from './Button';

export class Equals extends Button {
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
    const expression: ExpressionState = {
      strFirstNumber: this.solution ? String(this.solution) : '',
      sign: '',
      strSecondNumber: '',
    };

    return expression;
  }
}
