export type State = {
  expression?: Expression
  theme?: Theme
}

export type Expression = {
  firstNumber: string
  sign: string
  secondNumber: string
}

export type Theme = {
  containerBackgroundColor: string
  blocksBackgroundColor: string
  buttonBackgroundColor: string
  hoverButton: string
  numberColor: string
  lightTheme: string
  darkTheme: string
  hoverTheme: string
}

export type Themes = {
  dark: Theme
  light: Theme
}

export type cssVariables = {
  '--containerBackgroundColor'?: string
  '--blocksBackgroundColor'?: string
  '--buttonBackgroundColor'?: string
  '--hoverButton'?: string
  '--numberColor'?: string
  '--lightTheme'?: string
  '--darkTheme'?: string
  '--hoverTheme'?: string
}
