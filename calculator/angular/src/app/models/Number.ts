import { ExpressionState } from '../store/states/expression.state';
import { Button } from './Button';
import { pointAfterZero } from './helper/pointAfterZero';

export class Number extends Button {
  expression: ExpressionState;

  constructor(expression: ExpressionState) {
    super();
    this.expression = expression;
  }

  /**
   * clickHandler
   */
  public clickHandler(strEnteredNumber: string) {
    let strNumber: string = this.currentStrNumber(this.expression);

    if (strNumber.replace(/\D+/g, '').length < 5) {
      strNumber =
        strNumber.length && strNumber.match(/^[0%]+$/)
          ? pointAfterZero(strNumber, strEnteredNumber)
          : strNumber.includes('%')
          ? strNumber.replace('%', '').concat(strEnteredNumber, '%')
          : strNumber.concat(strEnteredNumber);

      const expression: ExpressionState =
        this.expression.strSecondNumber || this.expression.sign
          ? { ...this.expression, strSecondNumber: strNumber }
          : { ...this.expression, strFirstNumber: strNumber };

      return expression;
    }

    return this.expression;
  }
}
