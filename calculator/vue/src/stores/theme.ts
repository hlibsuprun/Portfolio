import { defineStore } from 'pinia'

export const themes = {
  dark: {
    containerBackgroundColor: 'rgb(34, 37, 45)',
    blocksBackgroundColor: 'rgb(42, 45, 55)',
    buttonBackgroundColor: 'rgb(40, 43, 51)',
    hoverButton: 'rgba(0, 0, 0, 0.1)',
    textColor: 'rgb(255, 255, 255)',
    lightTheme: 'rgb(115, 119, 127)',
    darkTheme: 'rgb(255, 255, 255)',
    hoverTheme: 'rgb(255, 255, 255)',
  },
  light: {
    containerBackgroundColor: 'rgb(255, 255, 255)',
    blocksBackgroundColor: 'rgb(240, 245, 255)',
    buttonBackgroundColor: 'rgb(255, 255, 255)',
    hoverButton: 'rgba(8, 8, 8, 0.1)',
    textColor: 'rgb(52, 54, 60)',
    lightTheme: 'rgb(60, 61, 68)',
    darkTheme: 'rgb(200, 200, 200)',
    hoverTheme: 'rgb(60, 61, 68)',
  },
}

export type Theme = {
  containerBackgroundColor: string
  blocksBackgroundColor: string
  buttonBackgroundColor: string
  hoverButton: string
  textColor: string
  lightTheme: string
  darkTheme: string
  hoverTheme: string
}

type State = {
  theme: Theme
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: () =>
    ({
      theme:
        themes[
          (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
          'light'
        ]
    } as State),
  actions: {
    toggleDarkTheme(): void {
      this.theme = themes['dark']
    },
    toggleLightTheme(): void {
      this.theme = themes['light']
    }
  }
})
