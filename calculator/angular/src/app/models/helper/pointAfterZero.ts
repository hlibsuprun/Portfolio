export function pointAfterZero(strNumberBeforeZero: string, strNumberAfterZero: string): string {
  const strNumber = strNumberBeforeZero
    .split('')
    .map((character) => (character === '0' ? character.concat('.', strNumberAfterZero) : character))
    .join('');

  return strNumber;
}
