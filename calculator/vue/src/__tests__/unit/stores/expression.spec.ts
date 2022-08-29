import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useExpressionStore } from '@/stores/expression'

describe('Expression Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('state', () => {
    /*
     * INITIAL STATE
     */
    it('initial state', () => {
      const expressionStore = useExpressionStore()

      expect(expressionStore.expression).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
    })

    /*
     * DIRECT STATE CHANGE
     */
    it('direct state change', () => {
      const expressionStore = useExpressionStore()
      const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

      expressionStore.expression = expression

      expect(expressionStore.expression).toEqual(expression)
    })
  })

  describe('getters', () => {
    /*
     * SOLUTION
     */
    describe('solution', () => {
      it.each([
        ['/', 1],
        ['*', 9],
        ['-', 0],
        ['+', 6]
      ])('calculation with a %s', (sign, expected) => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '3', sign, strSecondNumber: '3' }

        expressionStore.expression = expression

        expect(expressionStore.solution).toBe(expected)
      })

      it.each([
        ['/', -1],
        ['*', -9],
        ['-', -6],
        ['+', 0]
      ])('calculations with a negative number with a %s', (sign, expected) => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '-3', sign, strSecondNumber: '3' }

        expressionStore.expression = expression

        expect(expressionStore.solution).toBe(expected)
      })

      it.each([
        ['/', 100],
        ['*', 0.09],
        ['-', 2.91],
        ['+', 3.09]
      ])('calculations with a percent with a %s', (sign, expected) => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '3', sign, strSecondNumber: '3%' }

        expressionStore.expression = expression

        expect(expressionStore.solution).toBe(expected)
      })

      it.each([['/'], ['*'], ['-'], ['+']])(
        'calculation of non-integer numbers with a %s',
        sign => {
          const expressionStore = useExpressionStore()
          const expression = {
            strFirstNumber: String(Math.random()),
            sign,
            strSecondNumber: String(Math.random())
          }

          expressionStore.expression = expression

          let solution
          switch (sign) {
            case '/':
              solution = +expression.strFirstNumber / +expression.strSecondNumber
              break
            case '-':
              solution = +expression.strFirstNumber - +expression.strSecondNumber
              break
            case '*':
              solution = +expression.strFirstNumber * +expression.strSecondNumber
              break
            default:
              solution = +expression.strFirstNumber + +expression.strSecondNumber
          }

          expect(expressionStore.solution).toBe(+solution.toFixed(3))
        }
      )
    })
  })

  describe('actions', () => {
    /*
     * acClickHandler
     */
    it('acClickHandler', () => {
      const expressionStore = useExpressionStore()
      expressionStore.expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }

      expressionStore.acClickHandler()

      expect(expressionStore.expression).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
    })

    /*
     * backspaceClickHandler
     */
    it('backspaceClickHandler', () =>{
      const expressionStore = useExpressionStore()
      const expression = { strFirstNumber: '-1.%', sign: '/', strSecondNumber: '1' }
      expressionStore.expression = expression

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '' })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({ ...expression, sign: '', strSecondNumber: '' })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({ strFirstNumber: '-1.', sign: '', strSecondNumber: '' })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({ strFirstNumber: '-1', sign: '', strSecondNumber: '' })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({ strFirstNumber: '', sign: '', strSecondNumber: '' })
    })

    /*
     * divisionClickHandler
     */
    describe('divisionClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '/' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()
        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '/' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '' })
      })
    })

    /*
     * equalsClickHandler
     */
    it('equalsClickHandler', () => {
      const expressionStore = useExpressionStore()
      const expression = { strFirstNumber: '1', sign: '/', strSecondNumber: '1' }
      expressionStore.expression = expression

      expressionStore.equalsClickHandler()

      expect(expressionStore.expression).toEqual({ ...expression, sign: '', strSecondNumber: '' })
    })

    /*
     * minusClickHandler
     */
    describe('minusClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '-' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()
        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '-' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '-', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '0', strSecondNumber: '' })
      })
    })

    /*
     * multiplicationClickHandler
     */
    describe('multiplicationClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '*' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()
        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '*' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '*', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1', strSecondNumber: '' })
      })
    })

    /*
     * numberClickHandler
     */
    describe('numberClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1' })
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '11' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1', sign: '*' }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '1' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '*', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '11' })
      })
    })

    /*
     * percentClickHandler
     */
    describe('percentClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1%' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1', sign: '*' }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '*', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '1%' })
      })

      it('when there is a number percent', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1%' }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1' })
      })
    })

    /*
     * plusClickHandler
     */
    describe('plusClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '+' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()
        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '+' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '+', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '2', strSecondNumber: '' })
      })
    })

    /*
     * pointClickHandler
     */
    describe('pointClickHandler', () => {
      it('when there is no first number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression }

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1.' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1', sign: '+' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = { strFirstNumber: '1', sign: '+', strSecondNumber: '1' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strSecondNumber: '1.' })
      })

      it('when there is a number with a point', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1.' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1' })
      })
    })

    /*
     * reverseClickHandler
     */
    describe('reverseClickHandler', () => {
      it('one call when there is a number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.reverseClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '-1' })
      })

      it('when there is a number with a minus', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, strFirstNumber: '-1' }
        expressionStore.expression = expression

        expressionStore.reverseClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, strFirstNumber: '1' })
      })
    })
  })
})
