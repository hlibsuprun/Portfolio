import { Commit } from 'vuex'

import { State } from '@/types'

const state: State = {
  expression: { firstNumber: '', sign: '', secondNumber: '' }
}

const getters = {
  expression: (state: State) => state.expression
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
