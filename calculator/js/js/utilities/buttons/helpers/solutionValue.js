import { expressionObject } from './expression.js'
import { percent } from './percent.js'

export function solutionValue() {
  const { firstNumber, sign, secondNumber } = expressionObject

  if(!firstNumber) return 0
  
  if(!secondNumber) return firstNumber.includes('%') ? +percent(firstNumber).toFixed(3) : firstNumber

  const fNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : (sign === '*' || sign === '/') && firstNumber.includes('%')
      ? +percent(firstNumber).toFixed(3)
      : firstNumber.includes('%')
      ? +percent(firstNumber, secondNumber).toFixed(3)
      : +firstNumber
  
  const sNum =
    firstNumber.includes('%') && secondNumber.includes('%')
      ? +percent(secondNumber).toFixed(3)
      : (sign === '*' || sign === '/') && secondNumber.includes('%')
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
