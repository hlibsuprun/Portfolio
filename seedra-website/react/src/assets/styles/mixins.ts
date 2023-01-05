import { font } from "./variables";

export function rem(size: number): string {
  return `${size / 16}rem`;
}

export function em(size: number, fontSize: number = font.sizes.default): string {
  return `${size / fontSize}em`;
}
