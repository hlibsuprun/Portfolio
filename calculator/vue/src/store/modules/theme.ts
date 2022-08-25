import { Commit } from 'vuex'

import { Actions, Getters, Mutations, State, Themes } from '@/types/store/theme'

const themes: Themes = {
  dark: {
    containerBackgroundColor: '#22252d',
    blocksBackgroundColor: '#2a2d37',
    buttonBackgroundColor: '#282b33',
    hoverButton: 'rgba(0, 0, 0, 0.1)',
    numberColor: '#ffffff',
    lightTheme: '#73777F',
    darkTheme: '#FFFFFF',
    hoverTheme: '#FFFFFF'
  },
  light: {
    containerBackgroundColor: '#FFFFFF',
    blocksBackgroundColor: '#F9F9F9',
    buttonBackgroundColor: '#F7F7F7',
    hoverButton: 'rgba(8, 8, 8, 0.1)',
    numberColor: '#34363C',
    lightTheme: '#3C3D44',
    darkTheme: '#DFDFDF',
    hoverTheme: '#3C3D44'
  }
}

const state: State = {
  theme:
    themes[
      (window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark') ||
        'light'
    ]
}

const getters: Getters = {
  theme: state => state.theme
}

const actions: Actions = {
  toggleDarkTheme({ commit }: { commit: Commit }) {
    commit('toggleDarkTheme')
  },
  toggleLightTheme({ commit }: { commit: Commit }) {
    commit('toggleLightTheme')
  }
}

const mutations: Mutations = {
  toggleDarkTheme: state => (state.theme = themes['dark']),
  toggleLightTheme: state => (state.theme = themes['light'])
}

export default {
  state,
  getters,
  actions,
  mutations
}
