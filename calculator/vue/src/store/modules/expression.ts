import { Ac } from '@/models/Ac'
import { Backspace } from '@/models/Backspace'
import { Division } from '@/models/Division'
import { Equals } from '@/models/Equals'
import { Invert } from '@/models/Invert'
import { Minus } from '@/models/Minus'
import { Multiplication } from '@/models/Multiplication'
import { Number } from '@/models/Number'
import { Percent } from '@/models/Percent'
import { Plus } from '@/models/Plus'
import { Point } from '@/models/Point'
import { Actions, Getters, Mutations, State } from '@/types/store/expression'

const state: State = {
  expression: { firstNumber: '', sign: '', secondNumber: '' }
}

const getters: Getters = {
  expression: state => state.expression
}

const actions: Actions = {
  acClickHandler({ commit }) {
    commit('setExpression', new Ac().clickHandler())
  },
  backspaceClickHandler({ commit, state }) {
    commit('setExpression', new Backspace(state.expression).clickHandler())
  },
  divisionClickHandler({ commit, state }) {
    commit('setExpression', new Division(state.expression).clickHandler())
  },
  equalsClickHandler({ commit, state }) {
    commit('setExpression', new Equals(state.expression).clickHandler())
  },
  invertClickHandler({ commit, state }) {
    commit('setExpression', new Invert(state.expression).clickHandler())
  },
  minusClickHandler({ commit, state }) {
    commit('setExpression', new Minus(state.expression).clickHandler())
  },
  multiplicationClickHandler({ commit, state }) {
    commit('setExpression', new Multiplication(state.expression).clickHandler())
  },
  numberClickHandler({ commit, state }, event) {
    commit('setExpression', new Number(state.expression).clickHandler(event))
  },
  percentClickHandler({ commit, state }) {
    commit('setExpression', new Percent(state.expression).clickHandler())
  },
  plusClickHandler({ commit, state }) {
    commit('setExpression', new Plus(state.expression).clickHandler())
  },
  pointClickHandler({ commit, state }) {
    commit('setExpression', new Point(state.expression).clickHandler())
  }
}

const mutations: Mutations = {
  setExpression: (state, newExpression) => (state.expression = newExpression)
}

export default {
  state,
  getters,
  actions,
  mutations
}
