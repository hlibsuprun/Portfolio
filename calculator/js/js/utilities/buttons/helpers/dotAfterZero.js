export const dotAfterZero = (string, value) => string.split('').map((character) => (character === '0' ? character.concat('.', value) : character)).join('')
