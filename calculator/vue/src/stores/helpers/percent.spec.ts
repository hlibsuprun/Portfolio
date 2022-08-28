import { expect, it } from 'vitest'

import { percent } from '@/stores/helpers/percent'

it('percent test', () => {
  expect(percent('1%')).toBe(0.01)
  expect(percent('100', '25%')).toBe(25)
})
