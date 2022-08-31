import { expect, it } from '@jest/globals'

import { Expression } from '../../../app/slices/expressionSlice'
import { Multiple } from '../../../models/Multiple'

describe('clickHandler', () => {
  let expression: Expression

  it('when there is no first number', () => {
    expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Multiple(expression, 0).clickHandler()).toEqual(expression)
  })

  it('when there is one number', () => {
    expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Multiple(expression, 1).clickHandler()).toEqual({ ...expression, sign: '*' })
  })

  it('when there is a sign', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Multiple(expression, 1).clickHandler()).toEqual({ ...expression, sign: '*' })
  })

  it('when there is full expression', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Multiple(expression, 1).clickHandler()).toEqual({ ...expression, sign: '*', strSecondNumber: '' })
  })
})
