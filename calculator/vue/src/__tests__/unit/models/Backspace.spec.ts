import { expect, it } from 'vitest'

import { Backspace } from '@/models/Backspace'

it('clickHandler', () => {
  const expression = { strFirstNumber: '-1.%', sign: '/', strSecondNumber: '1' }
  let newExpression = new Backspace(expression).clickHandler()

  expect(newExpression).toEqual({ ...expression, strSecondNumber: '' })

  newExpression = new Backspace(newExpression).clickHandler()

  expect(newExpression).toEqual({ ...expression, sign: '', strSecondNumber: '' })

  newExpression = new Backspace(newExpression).clickHandler()

  expect(newExpression).toEqual({ strFirstNumber: '-1.', sign: '', strSecondNumber: '' })

  newExpression = new Backspace(newExpression).clickHandler()

  expect(newExpression).toEqual({ strFirstNumber: '-1', sign: '', strSecondNumber: '' })

  newExpression = new Backspace(newExpression).clickHandler()

  expect(newExpression).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
})
