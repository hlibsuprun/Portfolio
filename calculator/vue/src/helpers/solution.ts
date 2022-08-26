import { percent } from '@/helpers/percent'
import { Expression } from '@/types'

export const solution = (expression: Expression): number => {
  const { firstNumber, sign, secondNumber } = expression

  if (!firstNumber) return 0

  if (!secondNumber) {
    return firstNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : +firstNumber
  }

  const fNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : sign.match(/^[*/]+$/) && firstNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : firstNumber.includes('%')
      ? +percent(firstNumber, secondNumber).toFixed(3)
      : +firstNumber

  const sNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(secondNumber).toFixed(3)
      : sign.match(/^[*/]+$/) && secondNumber.includes('%')
      ? +percent(secondNumber).toFixed(3)
      : secondNumber.includes('%')
      ? +percent(firstNumber, secondNumber).toFixed(3)
      : +secondNumber

  const solution =
    sign === '+'
      ? fNum + sNum
      : sign === '-'
      ? fNum - sNum
      : sign === '*'
      ? fNum * sNum
      : fNum / sNum

  return +solution.toFixed(3)
}
