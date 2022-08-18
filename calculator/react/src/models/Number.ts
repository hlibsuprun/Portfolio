import { MouseEvent } from 'react'

import { Expression } from '../App'
import { Button } from './Button'
import { dotAfterZero } from './helper/dotAfterZero'

export class Number extends Button {
  expression: Expression

  constructor(expression: Expression) {
    super()
    this.expression = expression
  }

  /**
   * numberClickHandler
   */
  public numberClickHandler(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const value = (event.target as HTMLTextAreaElement).innerHTML

    let number = this.currentNumber(this.expression)

    if (number.length < 4) {
      number =
        number.length && (number === '0' || number === '0%')
          ? dotAfterZero(number, value)
          : number.includes('%')
          ? number.replace('%', '').concat(value, '%')
          : number.concat(value)

      const expression: Expression =
        this.expression.secondNumber || this.expression.sign
          ? { ...this.expression, secondNumber: number }
          : { ...this.expression, firstNumber: number }

      return expression
    }

    return this.expression
  }
}
