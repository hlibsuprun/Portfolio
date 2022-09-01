import { defineStore } from 'pinia'

import { Ac } from '@/models/Ac'
import { Backspace } from '@/models/Backspace'
import { Divide } from '@/models/Divide'
import { Equals } from '@/models/Equals'
import { Reverse } from '@/models/Reverse'
import { Minus } from '@/models/Minus'
import { Multiple } from '@/models/Multiple'
import { Number } from '@/models/Number'
import { Percent } from '@/models/Percent'
import { Plus } from '@/models/Plus'
import { Point } from '@/models/Point'
import { percent } from '@/stores/helpers/percent'
import { stringsToNumbers } from '@/stores/helpers/stringsToNumbers'

export type Expression = {
  strFirstNumber: string
  sign: string
  strSecondNumber: string
}

type State = {
  expression: Expression
}

export const useExpressionStore = defineStore({
  id: 'expression',
  state: () =>
    ({
      expression: {
        strFirstNumber: '',
        sign: '',
        strSecondNumber: ''
      }
    } as State),
  getters: {
    solution: (state): number => {
      const { strFirstNumber, sign, strSecondNumber } = state.expression

      if (!strSecondNumber || (sign === '/' && strSecondNumber.match(/^[0.%]+$/))) {
        return strFirstNumber.includes('%')
          ? percent(strFirstNumber)
          : +strFirstNumber
      }

      const { firstNumber, secondNumber } = stringsToNumbers(state.expression)

      let solution: number
      switch (sign) {
        case '/':
          solution = firstNumber / secondNumber
          break
        case '-':
          solution = firstNumber - secondNumber
          break
        case '*':
          solution = firstNumber * secondNumber
          break
        default:
          solution = firstNumber + secondNumber
      }

      return +solution.toFixed(3)
    }
  },
  actions: {
    acClickHandler(): void {
      this.expression = new Ac().clickHandler()
    },
    backspaceClickHandler(): void {
      this.expression = new Backspace(this.expression).clickHandler()
    },
    divideClickHandler(): void {
      this.expression = new Divide(this.expression, this.solution).clickHandler()
    },
    equalsClickHandler(): void {
      this.expression = new Equals(this.expression, this.solution).clickHandler()
    },
    minusClickHandler(): void {
      this.expression = new Minus(this.expression, this.solution).clickHandler()
    },
    multipleClickHandler(): void {
      this.expression = new Multiple(this.expression, this.solution).clickHandler()
    },
    numberClickHandler(strEnteredNumber: string): void {
      this.expression = new Number(this.expression).clickHandler(strEnteredNumber)
    },
    percentClickHandler(): void {
      this.expression = new Percent(this.expression).clickHandler()
    },
    plusClickHandler(): void {
      this.expression = new Plus(this.expression, this.solution).clickHandler()
    },
    pointClickHandler(): void {
      this.expression = new Point(this.expression).clickHandler()
    },
    reverseClickHandler(): void {
      this.expression = new Reverse(this.expression).clickHandler()
    }
  }
})
