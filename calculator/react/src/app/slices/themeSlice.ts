import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  dark: boolean
  light: boolean
}

const initialState: ThemeState = {
  dark: true,
  light: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkTheme: state => {
      state.dark = true
      state.light = false
    },
    toggleLightTheme: state => {
      state.dark = false
      state.light = true
    }
  }
})

export const { toggleDarkTheme, toggleLightTheme } = themeSlice.actions

export default themeSlice.reducer
