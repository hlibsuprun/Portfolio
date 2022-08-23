import { Commit } from 'vuex'

type Theme = {
  containerBackgroundColor: string
  blocksBackgroundColor: string
  buttonBackground: string
  hoverButton: string
  numberColor: string
  lightTheme: string
  darkTheme: string
  hoverTheme: string
}

type Themes = {
  dark: Theme
  light: Theme
}

const themes: Themes = {
  dark: {
    containerBackgroundColor: '#22252d',
    blocksBackgroundColor: '#2a2d37',
    buttonBackground: '#282b33',
    hoverButton: 'rgba(0, 0, 0, 0.1)',
    numberColor: '#ffffff',
    lightTheme: '#73777F',
    darkTheme: '#FFFFFF',
    hoverTheme: '#FFFFFF'
  },
  light: {
    containerBackgroundColor: '#FFFFFF',
    blocksBackgroundColor: '#F9F9F9',
    buttonBackground: '#F7F7F7',
    hoverButton: 'rgba(8, 8, 8, 0.1)',
    numberColor: '#34363C',
    lightTheme: '#3C3D44',
    darkTheme: '#DFDFDF',
    hoverTheme: '#3C3D44'
  }
}

type State = {
  theme: Theme
}

const state: State = {
  theme:
    themes[
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
        'light'
    ]
}

const getters = {
  theme: (state: State) => state.theme
}

const actions = {
  toggleDarkTheme({ commit }: { commit: Commit }) {
    commit('toggleDarkTheme')
  },
  toggleLightTheme({ commit }: { commit: Commit }) {
    commit('toggleLightTheme')
  }
}

const mutations = {
  toggleDarkTheme: (state: State) => (state.theme = themes['dark']),
  toggleLightTheme: (state: State) => (state.theme = themes['light'])
}

export default {
  state,
  getters,
  actions,
  mutations
}
