export function rem(size: number): string {
  return `${size / 16}rem`;
}

export function em(size: number, fontSize: number = 16): string {
  return `${size / fontSize}em`;
}
