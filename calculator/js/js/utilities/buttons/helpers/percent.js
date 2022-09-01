export function percent(strFirstNumber, strSecondNumber = '1') {
    const calculation = (parseFloat(strFirstNumber) / Math.pow(100, 1)) * parseFloat(strSecondNumber)

    return +calculation.toFixed(3)
}