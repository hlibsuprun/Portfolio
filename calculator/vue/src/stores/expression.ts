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

export const useExpressionStore = defineStore({
  id: 'expression',
  state: () => ({
    expression: {
      firstNumber: '',
      sign: '',
      secondNumber: ''
    }
  }),
  actions: {
    acClickHandler() {
      this.expression = new Ac().clickHandler()
    },
    backspaceClickHandler() {
      this.expression = new Backspace(this.expression).clickHandler()
    },
    divisionClickHandler() {
      this.expression = new Division(this.expression).clickHandler()
    },
    equalsClickHandler() {
      this.expression = new Equals(this.expression).clickHandler()
    },
    invertClickHandler() {
      this.expression = new Invert(this.expression).clickHandler()
    },
    minusClickHandler() {
      this.expression = new Minus(this.expression).clickHandler()
    },
    multiplicationClickHandler() {
      this.expression = new Multiplication(this.expression).clickHandler()
    },
    numberClickHandler(number: string) {
      this.expression = new Number(this.expression).clickHandler(number)
    },
    percentClickHandler() {
      this.expression = new Percent(this.expression).clickHandler()
    },
    plusClickHandler() {
      this.expression = new Plus(this.expression).clickHandler()
    },
    pointClickHandler() {
      this.expression = new Point(this.expression).clickHandler()
    }
  }
})
