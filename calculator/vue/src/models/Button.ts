import { Expression } from '@/stores/expression'

export class Button {
  public currentNumber(expression: Expression): string {
    const { firstNumber, sign, secondNumber } = expression

    return secondNumber ? secondNumber : sign ? '' : firstNumber
  }
}
