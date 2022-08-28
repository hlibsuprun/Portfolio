import { Expression } from '@/stores/expression'
import { percent } from '@/stores/helpers/percent'

export function stringsToNumbers(expression: Expression) {
  const { strFirstNumber, sign, strSecondNumber } = expression

  const firstNumber: number =
    (strFirstNumber.includes('%') && strSecondNumber.includes('%')) ||
    (sign.match(/^[*/]+$/) && strFirstNumber.includes('%')) ||
    strFirstNumber.includes('%')
      ? percent(strFirstNumber)
      : +strFirstNumber

  const secondNumber: number =
    (strFirstNumber.includes('%') && strSecondNumber.includes('%')) ||
    (sign.match(/^[*/]+$/) && strSecondNumber.includes('%'))
      ? percent(strSecondNumber)
      : strSecondNumber.includes('%')
      ? percent(strFirstNumber, strSecondNumber)
      : +strSecondNumber

  return { firstNumber, secondNumber }
}
