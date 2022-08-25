import { Commit } from 'vuex'

export type Expression = {
  firstNumber: string
  sign: string
  secondNumber: string
}

export type State = {
  expression: Expression
}

export type Getters = {
  expression: (state: State) => Expression
}

type ActionsProps = {
  commit: Commit
  state: State
}

export type Actions = {
  acClickHandler({ commit }: ActionsProps): void
  backspaceClickHandler({ commit, state }: ActionsProps): void
  divisionClickHandler({ commit, state }: ActionsProps): void
  equalsClickHandler({ commit, state }: ActionsProps): void
  invertClickHandler({ commit, state }: ActionsProps): void
  minusClickHandler({ commit, state }: ActionsProps): void
  multiplicationClickHandler({ commit, state }: ActionsProps): void
  numberClickHandler({ commit, state }: ActionsProps, event: string): void
  percentClickHandler({ commit, state }: ActionsProps): void
  plusClickHandler({ commit, state }: ActionsProps): void
  pointClickHandler({ commit, state }: ActionsProps): void
}

export type Mutations = {
  setExpression: (state: State, newExpression: Expression) => Expression
}
