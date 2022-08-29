import { describe, expect, it } from 'vitest'

import { Reverse } from '@/models/Reverse'

describe('clickHandler', () => {
  it('one call when there is a number', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Reverse(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '-1' })
  })

  it('when there is a number with a minus', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '-1' }

    expect(new Reverse(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '1' })
  })
})
