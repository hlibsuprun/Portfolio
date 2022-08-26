import { defineStore } from 'pinia'

const themes = {
  dark: {
    containerBackgroundColor: 'rgb(34,37,45)',
    blocksBackgroundColor: 'rgb(42,45,55)',
    buttonBackgroundColor: 'rgb(40,43,51)',
    hoverButton: 'rgba(0, 0, 0, 0.1)',
    numberColor: 'rgb(255,255,255)',
    lightTheme: 'rgb(115,119,127)',
    darkTheme: 'rgb(255,255,255)',
    hoverTheme: 'rgb(255,255,255)'
  },
  light: {
    containerBackgroundColor: 'rgb(255,255,255)',
    blocksBackgroundColor: 'rgb(249,249,249)',
    buttonBackgroundColor: 'rgb(247,247,247)',
    hoverButton: 'rgba(8, 8, 8, 0.1)',
    numberColor: 'rgb(52,54,60)',
    lightTheme: 'rgb(60,61,68)',
    darkTheme: 'rgb(223,223,223)',
    hoverTheme: 'rgb(60,61,68)'
  }
}

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    theme:
      themes[
        (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
          'light'
      ]
  }),
  actions: {
    toggleDarkTheme() {
      this.theme = themes['dark']
    },
    toggleLightTheme() {
      this.theme = themes['light']
    }
  }
})
