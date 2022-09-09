import { ExpressionState } from '../states/expression.state';
import { percent } from './percent';
import { stringsToNumbers } from './stringsToNumbers';

export function solution(expression: ExpressionState) {
  const { strFirstNumber, sign, strSecondNumber } = expression;

  if (!strSecondNumber || (sign === '/' && strSecondNumber.match(/^[0.%]+$/))) {
    return strFirstNumber.includes('%') ? percent(strFirstNumber) : +strFirstNumber;
  }

  const { firstNumber, secondNumber } = stringsToNumbers(expression);

  let solution: number;
  switch (sign) {
    case '/':
      solution = firstNumber / secondNumber;
      break;
    case '-':
      solution = firstNumber - secondNumber;
      break;
    case '*':
      solution = firstNumber * secondNumber;
      break;
    case '+':
      solution = firstNumber + secondNumber;
      break;
    default:
      solution = firstNumber;
  }

  return +solution.toFixed(3);
}
