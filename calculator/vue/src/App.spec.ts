import { createTestingPinia } from '@pinia/testing'
import { DOMWrapper, enableAutoUnmount, mount, VueWrapper } from '@vue/test-utils'
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

import App from '@/App.vue'

describe('App', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
      }))
    })
  })

  let wrapper: VueWrapper

  const findByDataTestId = (dataTestId: string): DOMWrapper<Element> =>
    wrapper.find(`[data-testid='${dataTestId}']`)

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })]
      }
    })
  })

  enableAutoUnmount(afterEach)

  /*
   * TESTS
   */
  it('original state of the app', () => {
    expect(findByDataTestId('problem').text()).toBe('')
    expect(findByDataTestId('solution').text()).toBe('0')
  })

  describe('entering numbers', () => {
    it.each([
      ['0'],
      ['1'],
      ['2'],
      ['3'],
      ['4'],
      ['5'],
      ['6'],
      ['7'],
      ['8'],
      ['9']
    ])('entering the number %s', async strNumber => {
      await findByDataTestId(strNumber).trigger('click')

      expect(findByDataTestId('problem').text()).toBe(strNumber)
      expect(findByDataTestId('solution').text()).toBe(strNumber)
    })

    it.each([
      [['0', '1', '2', '3', '4', '5'], '0.1234'],
      [['5', '6', '7', '8', '9', '0'], '56789']
    ])('entering numbers in order', async (array, expected) => {
      for (const strNumber of array) {
        await findByDataTestId(strNumber).trigger('click')
      }

      expect(findByDataTestId('problem').text()).toBe(expected)
      expect(findByDataTestId('solution').text()).toBe(expected)
    })

    it.each([
      ['0'],
      ['1'],
      ['2'],
      ['3'],
      ['4'],
      ['5'],
      ['6'],
      ['7'],
      ['8'],
      ['9']
    ])('entering the number %s after the sign', async strNumber => {
      await findByDataTestId('1').trigger('click')
      await findByDataTestId('+').trigger('click')

      await findByDataTestId(strNumber).trigger('click')

      expect(findByDataTestId('problem').text()).toBe(`1  ${strNumber}`)
      expect(findByDataTestId('problem').find('svg')).not.toBeUndefined()
      expect(findByDataTestId('solution').text()).toBe(String(+strNumber + 1))
    })
  })

  describe('entering signs', () => {
    it.each([
      ['ac'],
      ['backspace'],
      ['/'],
      ['='],
      ['inverse'],
      ['-'],
      ['*'],
      ['%'],
      ['+'],
      ['.']
    ])('entering %s without a number', async sign => {
      await findByDataTestId(sign).trigger('click')

      expect(findByDataTestId('problem').text()).toBe('')
      expect(findByDataTestId('solution').text()).toBe('0')
    })

    it.each([['/'], ['-'], ['*'], ['+']])(
      'entering %s without a number',
      async sign => {
        await findByDataTestId('1').trigger('click')
        await findByDataTestId(sign).trigger('click')

        expect(findByDataTestId('problem').find('svg')).not.toBeUndefined()
        expect(findByDataTestId('solution').text()).toBe('1')
      }
    )

    it.each([
      ['ac', { problem: '', solution: '0' }],
      ['backspace', { problem: '', solution: '0' }],
      ['=', { problem: '1', solution: '1' }],
      ['inverse', { problem: '-1', solution: '-1' }],
      ['%', { problem: '1%', solution: '0.01' }],
      ['.', { problem: '1.', solution: '1' }]
    ])('entering %s with a number', async (sign, { problem, solution }) => {
      await findByDataTestId('1').trigger('click')
      await findByDataTestId(sign).trigger('click')

      expect(findByDataTestId('problem').text()).toBe(problem)
      expect(findByDataTestId('solution').text()).toBe(solution)
    })
  })
})
