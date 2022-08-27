import { defineStore } from 'pinia'

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
import { percent } from '@/stores/helpers/percent'
import { stringsToNumbers } from '@/stores/helpers/stringsToNumbers'

export type Expression = {
  firstNumber: string
  sign: string
  secondNumber: string
}

type State = {
  expression: Expression
}

export const useExpressionStore = defineStore({
  id: 'expression',
  state: () =>
    ({
      expression: {
        firstNumber: '',
        sign: '',
        secondNumber: ''
      }
    } as State),
  getters: {
    solution: (state): number => {
      const { firstNumber, sign, secondNumber } = state.expression

      if (!secondNumber || (sign === '/' && secondNumber.match(/^[0.%]+$/))) {
        return firstNumber.includes('%')
          ? +percent(firstNumber).toFixed(3)
          : +firstNumber
      }

      const { fNum, sNum } = stringsToNumbers(state.expression)

      let solution = 0

      switch (sign) {
        case '+':
          solution = fNum + sNum
          break
        case '-':
          solution = fNum - sNum
          break
        case '*':
          solution = fNum * sNum
          break
        case '/':
          solution = fNum / sNum
          break
      }

      return +solution.toFixed(3)
    }
  },
  actions: {
    acClickHandler() {
      this.expression = new Ac().clickHandler()
    },
    backspaceClickHandler() {
      this.expression = new Backspace(this.expression).clickHandler()
    },
    divisionClickHandler() {
      this.expression = new Division(
        this.expression,
        this.solution
      ).clickHandler()
    },
    equalsClickHandler() {
      this.expression = new Equals(
        this.expression,
        this.solution
      ).clickHandler()
    },
    invertClickHandler() {
      this.expression = new Invert(this.expression).clickHandler()
    },
    minusClickHandler() {
      this.expression = new Minus(this.expression, this.solution).clickHandler()
    },
    multiplicationClickHandler() {
      this.expression = new Multiplication(
        this.expression,
        this.solution
      ).clickHandler()
    },
    numberClickHandler(number: string) {
      this.expression = new Number(this.expression).clickHandler(number)
    },
    percentClickHandler() {
      this.expression = new Percent(this.expression).clickHandler()
    },
    plusClickHandler() {
      this.expression = new Plus(this.expression, this.solution).clickHandler()
    },
    pointClickHandler() {
      this.expression = new Point(this.expression).clickHandler()
    }
  }
})
