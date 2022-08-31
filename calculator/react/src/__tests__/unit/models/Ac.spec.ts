import { expect, it } from '@jest/globals'

import { Ac } from '../../../models/Ac'

it('clickHandler', () => {
  expect(new Ac().clickHandler()).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
})
