export function pointAfterZero(strNumberBeforeZero, strNumberAfterZero) {
    const strNumber = strNumberBeforeZero
        .split('')
        .map(character => character === '0' ? character.concat('.', strNumberAfterZero) : character)
        .join('')

    return strNumber
}