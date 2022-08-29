import { describe, expect, it } from 'vitest'

import { Number } from '@/models/Number'

describe('clickHandler', () => {
  it('when there is no first number', () => {
    const expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strFirstNumber: '1' })
  })

  it('when there is one number', () => {
    const expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strFirstNumber: '11' })
  })

  it('when there is a sign', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strSecondNumber: '1' })
  })

  it('when there is full expression', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Number(expression).clickHandler('1')).toEqual({ ...expression, strSecondNumber: '11' })
  })
})
