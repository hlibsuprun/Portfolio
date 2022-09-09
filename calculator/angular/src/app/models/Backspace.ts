import { ExpressionState } from '../store/states/expression.state';
import { Button } from './Button';

export class Backspace extends Button {
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
    strNumber =
      isNaN(+strNumber[strNumber.length - 2]) && strNumber[strNumber.length - 2] !== '.'
        ? ''
        : strNumber.length
        ? strNumber.slice(0, -1)
        : '';

    const expression: ExpressionState = this.expression.strSecondNumber
      ? { ...this.expression, strSecondNumber: strNumber }
      : this.expression.sign && this.expression.strSecondNumber === ''
      ? { ...this.expression, sign: '' }
      : { ...this.expression, strFirstNumber: strNumber };

    return expression;
  }
}
