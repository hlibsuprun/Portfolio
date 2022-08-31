import { expect, it } from '@jest/globals'

import { Expression } from '../../../app/slices/expressionSlice'
import { Number } from '../../../models/Number'

describe('clickHandler', () => {
  let expression: Expression

  it('when there is no first number', () => {
    expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strFirstNumber: '1' })
  })

  it('when there is one number', () => {
    expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strFirstNumber: '11' })
  })

  it('when there is a sign', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strSecondNumber: '1' })
  })

  it('when there is full expression', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strSecondNumber: '11' })
  })
})
