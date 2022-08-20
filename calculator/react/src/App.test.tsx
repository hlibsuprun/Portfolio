import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import store from './app/store'

describe('entering numbers', () => {
  test.each`
    number
    ${'0'}
    ${'1'}
    ${'2'}
    ${'3'}
    ${'4'}
    ${'5'}
    ${'6'}
    ${'7'}
    ${'8'}
    ${'9'}
  `('entring number $number', ({ number }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId(number))

    expect(problem).toHaveTextContent(number)
    expect(solution).toHaveTextContent(number)
  })

  test('entering numbers in order', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    for (let i = 0; i <= 9; i++) {
      fireEvent.click(screen.getByTestId(String(i)))
    }

    expect(problem).toHaveTextContent('0.123456789')
    expect(solution).toHaveTextContent('0.123456789')
  })
})

describe('entering signs', () => {
  test.each`
    sign
    ${'ac'}
    ${'backspace'}
    ${'division'}
    ${'equals'}
    ${'invert'}
    ${'minus'}
    ${'multiplication'}
    ${'percent'}
    ${'plus'}
    ${'point'}
  `('entering $sign without a number', ({ sign }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId(sign))

    expect(problem).toHaveTextContent('')
    expect(solution).toHaveTextContent('0')
  })

  test.each`
    sign
    ${'division'}
    ${'minus'}
    ${'multiplication'}
    ${'plus'}
  `('entering arithmetic $sign with a number', ({ sign }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const button = screen.getByTestId(sign)
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId('1'))

    fireEvent.click(button)

    expect(problem).toHaveTextContent('1')
    expect(problem).toContainHTML('svg')
    expect(solution).toHaveTextContent('1')
  })

  test.each`
    sign           | expected
    ${'ac'}        | ${{ problem: '', solution: '0' }}
    ${'backspace'} | ${{ problem: '', solution: '0' }}
    ${'equals'}    | ${{ problem: '1', solution: '1' }}
    ${'invert'}    | ${{ problem: '-1', solution: '-1' }}
    ${'percent'}   | ${{ problem: '1%', solution: '0.01' }}
    ${'point'}     | ${{ problem: '1.', solution: '1' }}
  `('entering $sign with a number', ({ sign, expected }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId('1'))

    fireEvent.click(screen.getByTestId(sign))

    expect(problem).toHaveTextContent(expected.problem)
    expect(solution).toHaveTextContent(expected.solution)
  })
})

describe('calculations', () => {
  test.each`
    sign                | expected
    ${'division'}       | ${{ solution: '2.176' }}
    ${'multiplication'} | ${{ solution: '699678' }}
    ${'minus'}          | ${{ solution: '667' }}
    ${'plus'}           | ${{ solution: '1801' }}
  `('calculations with a $sign', ({ sign, expected }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const button = screen.getByTestId(sign)
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId('1'))
    fireEvent.click(screen.getByTestId('2'))
    fireEvent.click(screen.getByTestId('3'))
    fireEvent.click(screen.getByTestId('4'))

    expect(problem).toHaveTextContent('1234')

    fireEvent.click(button)

    expect(problem).toContainHTML(
      `1234<svg><use href="icons.svg#${sign}" /></svg>`
    )

    fireEvent.click(screen.getByTestId('5'))
    fireEvent.click(screen.getByTestId('6'))
    fireEvent.click(screen.getByTestId('7'))

    expect(problem).toContainHTML(
      `1234<svg><use href="icons.svg#${sign}" /></svg>567`
    )

    expect(solution).toHaveTextContent(expected.solution)
  })

  test.each`
    sign                | expected
    ${'division'}       | ${{ solution: '-2.176' }}
    ${'multiplication'} | ${{ solution: '-699678' }}
    ${'minus'}          | ${{ solution: '-1801' }}
    ${'plus'}           | ${{ solution: '-667' }}
  `(
    'calculations with a negative number with a $sign',
    ({ sign, expected }) => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
      const button = screen.getByTestId(sign)
      const problem = screen.getByTestId('problem')
      const solution = screen.getByTestId('solution')

      fireEvent.click(screen.getByTestId('1'))
      fireEvent.click(screen.getByTestId('2'))
      fireEvent.click(screen.getByTestId('3'))
      fireEvent.click(screen.getByTestId('4'))
      fireEvent.click(screen.getByTestId('invert'))

      expect(problem).toHaveTextContent('-1234')

      fireEvent.click(button)

      expect(problem).toContainHTML(
        `-1234<svg><use href="icons.svg#${sign}" /></svg>`
      )

      fireEvent.click(screen.getByTestId('5'))
      fireEvent.click(screen.getByTestId('6'))
      fireEvent.click(screen.getByTestId('7'))

      expect(problem).toContainHTML(
        `1234<svg><use href="icons.svg#${sign}" /></svg>567`
      )

      expect(solution).toHaveTextContent(expected.solution)
    }
  )

  test.each`
    sign                | expected
    ${'division'}       | ${{ solution: '0.022' }}
    ${'multiplication'} | ${{ solution: '6996.78' }}
    ${'minus'}          | ${{ solution: '6429.78' }}
    ${'plus'}           | ${{ solution: '7563.78' }}
  `('calculations with a percent with a $sign', ({ sign, expected }) => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const button = screen.getByTestId(sign)
    const problem = screen.getByTestId('problem')
    const solution = screen.getByTestId('solution')

    fireEvent.click(screen.getByTestId('1'))
    fireEvent.click(screen.getByTestId('2'))
    fireEvent.click(screen.getByTestId('3'))
    fireEvent.click(screen.getByTestId('4'))
    fireEvent.click(screen.getByTestId('percent'))

    expect(problem).toHaveTextContent('1234%')

    fireEvent.click(button)

    expect(problem).toContainHTML(
      `1234%<svg><use href="icons.svg#${sign}" /></svg>`
    )

    fireEvent.click(screen.getByTestId('5'))
    fireEvent.click(screen.getByTestId('6'))
    fireEvent.click(screen.getByTestId('7'))

    expect(problem).toContainHTML(
      `1234%<svg><use href="icons.svg#${sign}" /></svg>567`
    )

    expect(solution).toHaveTextContent(expected.solution)
  })
})
