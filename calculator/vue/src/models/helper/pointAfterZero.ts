export const pointAfterZero = (string: string, value: string): string =>
  string
    .split('')
    .map(character =>
      character === '0' ? character.concat('.', value) : character
    )
    .join('')
