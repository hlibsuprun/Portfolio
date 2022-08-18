export type Theme = {
  calculatorBackground: string
  numpadBackground: string
  buttonBackground: string
  hoverButton: string
  numberColor: string
  lightTheme: string
  darkTheme: string
  hoverTheme: string
}

export const dark: Theme = {
  calculatorBackground: '#22252d',
  numpadBackground: '#2a2d37',
  buttonBackground: '#282b33',
  hoverButton: 'rgba(0, 0, 0, 0.1)',
  numberColor: '#ffffff',
  lightTheme: '#73777F',
  darkTheme: '#FFFFFF',
  hoverTheme: '#FFFFFF'
}

export const light: Theme = {
  calculatorBackground: '#FFFFFF',
  numpadBackground: '#F9F9F9',
  buttonBackground: '#F7F7F7',
  hoverButton: 'rgba(8, 8, 8, 0.1)',
  numberColor: '#34363C',
  lightTheme: '#3C3D44',
  darkTheme: '#DFDFDF',
  hoverTheme: '#3C3D44'
}
