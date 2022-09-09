import { ExpressionState } from '../store/states/expression.state';
import { Button } from './Button';

export class Point extends Button {
  expression: ExpressionState;

  constructor(expression: ExpressionState) {
    super();
    this.expression = expression;
  }

  /**
   * clickHandler
   */
  public clickHandler() {
    let strNumber: string = this.currentStrNumber(this.expression);
    strNumber = strNumber.slice(-1).includes('.')
      ? strNumber.slice(0, -1)
      : strNumber.includes('.')
      ? strNumber
      : strNumber.includes('%')
      ? strNumber.replace('%', '').concat('.%')
      : strNumber
      ? strNumber.concat('.')
      : strNumber;

    const expression: ExpressionState =
      this.expression.strSecondNumber || this.expression.sign
        ? { ...this.expression, strSecondNumber: strNumber }
        : { ...this.expression, strFirstNumber: strNumber };

    return expression;
  }
}
