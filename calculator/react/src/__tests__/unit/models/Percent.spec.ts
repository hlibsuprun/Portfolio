import { expect, it } from '@jest/globals'

import { Expression } from '../../../app/slices/expressionSlice'
import { Percent } from '../../../models/Percent'

describe('clickHandler', () => {
  let expression: Expression

  it('when there is no first number', () => {
    expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Percent(expression).clickHandler()).toEqual(expression)
  })

  it('when there is one number', () => {
    expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Percent(expression).clickHandler()).toEqual({ ...expression, strFirstNumber: '1%' })
  })

  it('when there is a sign', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Percent(expression).clickHandler()).toEqual(expression)
  })

  it('when there is full expression', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Percent(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '1%' })
  })

  it('when there is a number with a percent', () => {
    expression = { strFirstNumber: '1%', sign: '', strSecondNumber: '' }

    expect(new Percent(expression).clickHandler()).toEqual({ ...expression, strFirstNumber: '1' })
  })
})
