import { expressionObject } from "./expression.js";

export function definitionOfNumber () {
  const { firstNumber, sign, secondNumber } = expressionObject

  return secondNumber ? secondNumber : sign ? '' : firstNumber
}
