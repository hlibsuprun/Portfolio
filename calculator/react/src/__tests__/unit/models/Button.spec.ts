import { expect, it } from '@jest/globals'

import { Button } from '../../../models/Button'

it('currentNumber', () => {
  expect(new Button().currentStrNumber({ strFirstNumber: '-1.%', sign: '', strSecondNumber: '' })).toBe('-1.%')
  expect(new Button().currentStrNumber({ strFirstNumber: '-1.%', sign: '/', strSecondNumber: '' })).toBe('')
  expect(new Button().currentStrNumber({ strFirstNumber: '-1.%', sign: '/', strSecondNumber: '1' })).toBe('1')
})
