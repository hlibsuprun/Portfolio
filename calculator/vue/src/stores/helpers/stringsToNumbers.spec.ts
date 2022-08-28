import { expect, it } from 'vitest'

import { stringsToNumbers } from '@/stores/helpers/stringsToNumbers'

it('stringsToNumbers', () => {
  expect(stringsToNumbers({ strFirstNumber: '-1.5', sign: '+', strSecondNumber: '-50.00%' }))
    .toEqual({ firstNumber: -1.5, secondNumber: 0.75 })
})
