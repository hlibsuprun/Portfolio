import { Expression } from '../../App'
import { percentCalculation } from '../../models/helpers/percentCalculation'

export const solutionCalculation = ({
  firstNumber,
  sign,
  secondNumber
}: Expression): number => {
  if (!firstNumber) return 0

  if (!secondNumber) {
    return firstNumber.includes('%')
      ? +percentCalculation(firstNumber).toFixed(3)
      : +firstNumber
  }

  const fNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percentCalculation(firstNumber).toFixed(3)
      : (sign === '*' || sign === '/') && firstNumber.includes('%')
      ? +percentCalculation(firstNumber).toFixed(3)
      : firstNumber.includes('%')
      ? +percentCalculation(firstNumber, secondNumber).toFixed(3)
      : +firstNumber

  const sNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percentCalculation(secondNumber).toFixed(3)
      : (sign === '*' || sign === '/') && secondNumber.includes('%')
      ? +percentCalculation(secondNumber).toFixed(3)
      : secondNumber.includes('%')
      ? +percentCalculation(firstNumber, secondNumber).toFixed(3)
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
