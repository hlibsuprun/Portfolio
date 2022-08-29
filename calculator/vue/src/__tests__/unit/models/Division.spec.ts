import { describe, expect, it } from 'vitest'

import { Division } from '@/models/Division'

describe('clickHandler', () => {
  it('when there is no first number', () => {
    const expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Division(expression, 0).clickHandler()).toEqual(expression)
  })

  it('when there is one number', () => {
    const expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Division(expression, 1).clickHandler()).toEqual({ ...expression, sign: '/' })
  })

  it('when there is a sign', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Division(expression, 1).clickHandler()).toEqual({ ...expression, sign: '/' })
  })

  it('when there is full expression', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Division(expression, 1).clickHandler()).toEqual({ ...expression, sign: '/', strSecondNumber: '' })
  })
})
