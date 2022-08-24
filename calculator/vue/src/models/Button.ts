import { Expression } from '../App'

export class Button {
  public currentNumber({
    firstNumber,
    sign,
    secondNumber
  }: Expression): string {
    return secondNumber ? secondNumber : sign ? '' : firstNumber
  }
}
