import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { Ac } from '../../models/Ac'
import { Backspace } from '../../models/Backspace'
import { Division } from '../../models/Division'
import { Equals } from '../../models/Equals'
import { Minus } from '../../models/Minus'
import { Multiplication } from '../../models/Multiplication'
import { Number } from '../../models/Number'
import { Percent } from '../../models/Percent'
import { Plus } from '../../models/Plus'
import { Point } from '../../models/Point'
import { Reverse } from '../../models/Reverse'
import { RootState } from '../store'
import { percent } from './helpers/percent'
import { stringsToNumbers } from './helpers/stringsToNumbers'

export type Expression = {
  strFirstNumber: string
  sign: '/' | '*' | '-' | '+' | ''
  strSecondNumber: string
}

type State = {
  expression: Expression
}

const initialState: State = {
  expression: {
    strFirstNumber: '',
    sign: '',
    strSecondNumber: ''
  }
}

export const selectExpression = (state: RootState) => state.expression.expression

export const selectSolution = (state: RootState) => {
  const { strFirstNumber, sign, strSecondNumber } = state.expression.expression

  if (!strSecondNumber || (sign === '/' && strSecondNumber.match(/^[0.%]+$/))) {
    return strFirstNumber.includes('%')
      ? percent(strFirstNumber)
      : +strFirstNumber
  }

  const { firstNumber, secondNumber } = stringsToNumbers(state.expression.expression)

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

export const expressionSlice = createSlice({
  name: 'expression',
  initialState,
  reducers: {
    acClickHandler: state => {
      state.expression = new Ac().clickHandler()
    },
    backspaceClickHandler: state => {
      state.expression = new Backspace(state.expression).clickHandler()
    },
    divisionClickHandler: (state, action: PayloadAction<number>) => {
      state.expression = new Division(state.expression, action.payload).clickHandler()
    },
    equalsClickHandler: (state, action: PayloadAction<number>) => {
      state.expression = new Equals(state.expression, action.payload).clickHandler()
    },
    minusClickHandler: (state, action: PayloadAction<number>) => {
      state.expression = new Minus(state.expression, action.payload).clickHandler()
    },
    multiplicationClickHandler: (state, action: PayloadAction<number>) => {
      state.expression = new Multiplication(state.expression, action.payload).clickHandler()
    },
    numberClickHandler: (state, action: PayloadAction<string>) => {
      state.expression = new Number(state.expression).clickHandler(action.payload)
    },
    percentClickHandler: state => {
      state.expression = new Percent(state.expression).clickHandler()
    },
    plusClickHandler: (state, action: PayloadAction<number>) => {
      state.expression = new Plus(state.expression, action.payload).clickHandler()
    },
    pointClickHandler: state => {
      state.expression = new Point(state.expression).clickHandler()
    },
    reverseClickHandler: state => {
      state.expression = new Reverse(state.expression).clickHandler()
    }
  }
})

export const {
  acClickHandler,
  backspaceClickHandler,
  divisionClickHandler,
  equalsClickHandler,
  minusClickHandler,
  multiplicationClickHandler,
  numberClickHandler,
  percentClickHandler,
  plusClickHandler,
  pointClickHandler,
  reverseClickHandler
} = expressionSlice.actions

export default expressionSlice.reducer
