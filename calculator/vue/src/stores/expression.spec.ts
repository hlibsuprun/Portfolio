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

      expect(expressionStore.expression).toEqual({
        firstNumber: '',
        sign: '',
        secondNumber: ''
      })
    })

    /*
     * DIRECT STATE CHANGE
     */
    it('direct state change', () => {
      const expressionStore = useExpressionStore()
      const expression = { firstNumber: '1', sign: '/', secondNumber: '1' }
      expressionStore.expression = expression

      expect(expressionStore.expression).toEqual(expression)
    })
  })

  describe('getters', () => {
    /*
     * SOLUTION
     */
    describe('solution', () => {
      it.each([['/'], ['*'], ['-'], ['+']])('calculation with a %i', sign => {
        const expressionStore = useExpressionStore()
        expressionStore.expression = {
          firstNumber: String(Math.random()),
          sign,
          secondNumber: String(Math.random())
        }

        let solution
        switch (sign) {
          case '/':
            solution =
              +expressionStore.expression.firstNumber /
              +expressionStore.expression.secondNumber
            break
          case '*':
            solution =
              +expressionStore.expression.firstNumber *
              +expressionStore.expression.secondNumber
            break
          case '-':
            solution =
              +expressionStore.expression.firstNumber -
              +expressionStore.expression.secondNumber
            break
          default:
            solution =
              +expressionStore.expression.firstNumber +
              +expressionStore.expression.secondNumber
        }

        expect(expressionStore.solution).toBe(+solution.toFixed(3))
      })
    })
  })

  describe('actions', () => {
    /*
     * acClickHandler
     */
    it('acClickHandler', () => {
      const expressionStore = useExpressionStore()
      expressionStore.expression = {
        firstNumber: '1',
        sign: '/',
        secondNumber: '1'
      }

      expressionStore.acClickHandler()

      expect(expressionStore.expression).toEqual({
        firstNumber: '',
        sign: '',
        secondNumber: ''
      })
    })

    /*
     * backspaceClickHandler
     */
    it('backspaceClickHandler', () => {
      const expressionStore = useExpressionStore()
      const expression = {
        firstNumber: '-1.%',
        sign: '/',
        secondNumber: '1'
      }
      expressionStore.expression = expression

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({
        ...expression,
        secondNumber: ''
      })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({
        ...expression,
        sign: '',
        secondNumber: ''
      })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({
        firstNumber: '-1.',
        sign: '',
        secondNumber: ''
      })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({
        firstNumber: '-1',
        sign: '',
        secondNumber: ''
      })

      expressionStore.backspaceClickHandler()

      expect(expressionStore.expression).toEqual({
        firstNumber: '',
        sign: '',
        secondNumber: ''
      })
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '/' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()
        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '/' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '/',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.divisionClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          secondNumber: ''
        })
      })
    })

    /*
     * equalsClickHandler
     */
    it('equalsClickHandler', () => {
      const expressionStore = useExpressionStore()
      const expression = { firstNumber: '1', sign: '/', secondNumber: '1' }
      expressionStore.expression = expression

      expressionStore.equalsClickHandler()

      expect(expressionStore.expression).toEqual({
        ...expression,
        sign: '',
        secondNumber: ''
      })
    })

    /*
     * invertClickHandler
     */
    describe('invertClickHandler', () => {
      it('one call when there is a number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.invertClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '-1'
        })
      })

      it('two calls when there is a number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.invertClickHandler()
        expressionStore.invertClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '-' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()
        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '-' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '-',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.minusClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '0',
          secondNumber: ''
        })
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '*' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()
        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '*' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '*',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.multiplicationClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '1',
          secondNumber: ''
        })
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

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '1'
        })
      })

      it('when there is one number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '11'
        })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          ...expressionStore.expression,
          firstNumber: '1',
          sign: '*'
        }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({
          ...expression,
          secondNumber: '1'
        })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '*',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.numberClickHandler('1')

        expect(expressionStore.expression).toEqual({
          ...expression,
          secondNumber: '11'
        })
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '1%'
        })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          ...expressionStore.expression,
          firstNumber: '1',
          sign: '*'
        }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '*',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          secondNumber: '1%'
        })
      })

      it('two calls when there is a number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.percentClickHandler()
        expressionStore.percentClickHandler()

        expect(expressionStore.expression).toEqual(expression)
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '+' })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()
        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({ ...expression, sign: '+' })
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '+',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.plusClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '2',
          secondNumber: ''
        })
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
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          firstNumber: '1.'
        })
      })

      it('when there is a sign', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          ...expressionStore.expression,
          firstNumber: '1',
          sign: '+'
        }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })

      it('when there is full expression', () => {
        const expressionStore = useExpressionStore()
        const expression = {
          firstNumber: '1',
          sign: '+',
          secondNumber: '1'
        }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual({
          ...expression,
          secondNumber: '1.'
        })
      })

      it('two calls when there is a number', () => {
        const expressionStore = useExpressionStore()
        const expression = { ...expressionStore.expression, firstNumber: '1' }
        expressionStore.expression = expression

        expressionStore.pointClickHandler()
        expressionStore.pointClickHandler()

        expect(expressionStore.expression).toEqual(expression)
      })
    })
  })
})
