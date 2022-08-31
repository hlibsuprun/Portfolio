import { expect, it } from '@jest/globals'

import { Expression } from '../../../app/slices/expressionSlice'
import { Equals } from '../../../models/Equals'

it('clickHandler', () => {
  const expression: Expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

  expect(new Equals(expression, 1).clickHandler()).toEqual({ ...expression, sign: '', strSecondNumber: '' })
})
