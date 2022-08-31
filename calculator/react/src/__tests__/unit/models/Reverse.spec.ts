import { expect, it } from '@jest/globals'

import { Expression } from '../../../app/slices/expressionSlice'
import { Reverse } from '../../../models/Reverse'

describe('clickHandler', () => {
  let expression: Expression

  it('one call when there is a number', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Reverse(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '-1' })
  })

  it('when there is a number with a minus', () => {
    expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '-1' }

    expect(new Reverse(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '1' })
  })
})
