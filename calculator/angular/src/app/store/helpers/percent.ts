export function percent(strFirstNumber: string, strSecondNumber = '1'): number {
  const calculation: number =
    (parseFloat(strFirstNumber) / Math.pow(100, 1)) * parseFloat(strSecondNumber);

  return +calculation.toFixed(3);
}
