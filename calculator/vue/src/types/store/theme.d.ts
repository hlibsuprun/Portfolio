import { Commit } from 'vuex'

export type Theme = {
  containerBackgroundColor?: string
  blocksBackgroundColor?: string
  buttonBackgroundColor?: string
  hoverButton?: string
  numberColor?: string
  lightTheme?: string
  darkTheme?: string
  hoverTheme?: string
}

export type Themes = {
  dark: Theme
  light: Theme
}

export type State = {
  theme: Theme
}

export type Getters = {
  theme: (state: State) => Theme
}

type ActionsProps = {
  commit: Commit
}

export type Actions = {
  toggleDarkTheme({ commit }: ActionsProps): void
  toggleLightTheme({ commit }: ActionsProps): void
}

export type Mutations = {
  toggleDarkTheme: (state: State) => Theme
  toggleLightTheme: (state: State) => Theme
}
