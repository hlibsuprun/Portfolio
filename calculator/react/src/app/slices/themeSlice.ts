import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

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
  }
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

const initialState: State = {
  theme:
    themes[
    (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
    'light'
    ]
}

export const themeSelector = (state: RootState) => state.theme.theme

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkTheme: state => {
      state.theme = themes['dark']
    },
    toggleLightTheme: state => {
      state.theme = themes['light']
    }
  }
})

export const { toggleDarkTheme, toggleLightTheme } = themeSlice.actions

export default themeSlice.reducer
