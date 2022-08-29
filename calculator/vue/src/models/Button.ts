import { Expression } from '@/stores/expression'

export class Button {
  public currentStrNumber(expression: Expression): string {
    const { strFirstNumber, sign, strSecondNumber } = expression

    return strSecondNumber ? strSecondNumber : sign ? '' : strFirstNumber
  }
}
