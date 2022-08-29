import { expect, it } from 'vitest'

import { Equals } from '@/models/Equals'

it('clickHandler', () => {
  const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

  expect(new Equals(expression, 1).clickHandler()).toEqual({ ...expression, sign: '', strSecondNumber: '' })
})
