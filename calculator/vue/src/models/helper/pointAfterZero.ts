export const pointAfterZero = (number: string, num: string): string =>
  number
    .split('')
    .map(character =>
      character === '0' ? character.concat('.', num) : character
    )
    .join('')
