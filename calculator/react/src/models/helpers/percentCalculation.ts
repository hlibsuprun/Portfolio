export const percentCalculation = (firstNumber: string, secondNumber = '1') =>
  (parseFloat(firstNumber) / Math.pow(100, 1)) * parseFloat(secondNumber)
