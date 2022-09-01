import { expressionObject } from './expression.js'
import { percent } from './percent.js'

export function solution() {
  const { strFirstNumber, sign, strSecondNumber } = expressionObject

  if (!strSecondNumber || (sign === '/' && strSecondNumber.match(/^[0.%]+$/))) {
    return strFirstNumber.includes('%')
      ? percent(strFirstNumber)
      : +strFirstNumber
  }

  const firstNumber =
      (strFirstNumber.includes('%') && strSecondNumber.includes('%')) ||
      (sign.match(/^[*/]+$/) && strFirstNumber.includes('%')) ||
      strFirstNumber.includes('%')
        ? percent(strFirstNumber)
        : +strFirstNumber
  
  const secondNumber =
      (strFirstNumber.includes('%') && strSecondNumber.includes('%')) ||
      (sign.match(/^[*/]+$/) && strSecondNumber.includes('%'))
        ? percent(strSecondNumber)
        : strSecondNumber.includes('%')
        ? percent(strFirstNumber, strSecondNumber)
        : +strSecondNumber

  let solution
  switch (sign) {
    case '/':
      solution = firstNumber / secondNumber
      break
    case '-':
      solution = firstNumber - secondNumber
      break
    case '*':
      solution = firstNumber * secondNumber
      break
    default:
      solution = firstNumber + secondNumber
  }


  return +solution.toFixed(3) 
}
