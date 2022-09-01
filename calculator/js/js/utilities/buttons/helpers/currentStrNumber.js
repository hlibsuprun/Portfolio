import { expressionObject } from "./expression.js";

export function currentStrNumber () {
  const { strFirstNumber, sign, strSecondNumber } = expressionObject

  return strSecondNumber ? strSecondNumber : sign ? '' : strFirstNumber
}
