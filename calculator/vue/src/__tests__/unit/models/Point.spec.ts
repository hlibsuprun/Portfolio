import { describe, expect, it } from 'vitest'

import { Point } from '@/models/Point'

describe('clickHandler', () => {
  it('when there is no first number', () => {
    const expression = { strFirstNumber: '', sign: '', strSecondNumber: '' }

    expect(new Point(expression).clickHandler()).toEqual(expression)
  })

  it('when there is one number', () => {
    const expression = { strFirstNumber: '1', sign: '', strSecondNumber: '' }

    expect(new Point(expression).clickHandler()).toEqual({ ...expression, strFirstNumber: '1.' })
  })

  it('when there is a sign', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '' }

    expect(new Point(expression).clickHandler()).toEqual(expression)
  })

  it('when there is full expression', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

    expect(new Point(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '1.' })
  })

  it('when there is a number with a point', () => {
    const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1.' }

    expect(new Point(expression).clickHandler()).toEqual({ ...expression, strSecondNumber: '1' })
  })
})
