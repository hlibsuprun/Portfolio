import { Expression } from '@/stores/expression'
import { percent } from '@/stores/helpers/percent'

export const stringsToNumbers = (expression: Expression) => {
  const { firstNumber, sign, secondNumber } = expression

  const fNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : sign.match(/^[*/]+$/) && firstNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : firstNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : +firstNumber

  const sNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(secondNumber).toFixed(3)
      : sign.match(/^[*/]+$/) && secondNumber.includes('%')
      ? +percent(secondNumber).toFixed(3)
      : secondNumber.includes('%')
      ? +percent(firstNumber, secondNumber).toFixed(3)
      : +secondNumber

  return { fNum, sNum }
}
