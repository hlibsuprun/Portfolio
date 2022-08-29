import { expect, it } from 'vitest'

import { Ac } from '@/models/Ac'

it('clickHandler', () => {
  expect(new Ac().clickHandler()).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
})
