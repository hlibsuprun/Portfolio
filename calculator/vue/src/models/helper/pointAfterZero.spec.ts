import { expect, it } from 'vitest'

import { pointAfterZero } from '@/models/helper/pointAfterZero'

it('pointAfterZero', () => {
  expect(pointAfterZero('0', '1')).toBe('0.1')
  expect(pointAfterZero('0%', '1')).toBe('0.1%')
})
