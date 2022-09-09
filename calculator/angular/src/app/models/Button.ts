import { ExpressionState } from '../store/states/expression.state';

export class Button {
  public currentStrNumber(expression: ExpressionState): string {
    const { strFirstNumber, sign, strSecondNumber } = expression;

    return strSecondNumber ? strSecondNumber : sign ? '' : strFirstNumber;
  }
}
