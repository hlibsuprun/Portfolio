import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react'

import { Expression } from '../App'
import { Ac } from '../models/Ac'
import { Backspace } from '../models/Backspace'
import { Division } from '../models/Division'
import { Equals } from '../models/Equals'
import { Invert } from '../models/Invert'
import { Minus } from '../models/Minus'
import { Multiplication } from '../models/Multiplication'
import { Number } from '../models/Number'
import { Percent } from '../models/Percent'
import { Plus } from '../models/Plus'
import { Point } from '../models/Point'
import { Icon } from './Icon'
import { StyledNumpad } from './styles/Numpad.styled'

type NumpadProps = {
  expression: Expression
  setExpression: Dispatch<SetStateAction<Expression>>
}

export const Numpad: FC<NumpadProps> = ({ expression, setExpression }) => {
  const buttons = [
    {
      value: <Icon iconName='ac' />,
      onClick: new Ac().clickHandler(),
      dataTestId: 'ac'
    },
    {
      value: <Icon iconName='plus-slash-minus' />,
      onClick: new Invert(expression).clickHandler(),
      dataTestId: 'invert'
    },
    {
      value: <Icon iconName='percent' />,
      onClick: new Percent(expression).clickHandler(),
      dataTestId: 'percent'
    },
    {
      value: <Icon iconName='division' />,
      onClick: new Division(expression).clickHandler(),
      dataTestId: 'division'
    },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    {
      value: <Icon iconName='multiplication' />,
      onClick: new Multiplication(expression).clickHandler(),
      dataTestId: 'multiplication'
    },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    {
      value: <Icon iconName='minus' />,
      onClick: new Minus(expression).clickHandler(),
      dataTestId: 'minus'
    },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    {
      value: <Icon iconName='plus' />,
      onClick: new Plus(expression).clickHandler(),
      dataTestId: 'plus'
    },
    {
      value: <Icon iconName='backspace' />,
      className: 'backspace',
      onClick: new Backspace(expression).clickHandler(),
      dataTestId: 'backspace'
    },
    { value: '0' },
    {
      value: <Icon iconName='point' />,
      className: 'point',
      onClick: new Point(expression).clickHandler(),
      dataTestId: 'point'
    },
    {
      value: <Icon iconName='equals' />,
      onClick: new Equals(expression).clickHandler(),
      dataTestId: 'equals'
    }
  ]

  return (
    <StyledNumpad>
      {buttons.map(({ value, className, dataTestId, onClick }, index) => (
        <button
          key={index}
          className={className ? className : 'number'}
          data-testid={dataTestId ? dataTestId : value}
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            setExpression(
              onClick ? onClick : new Number(expression).clickHandler(event)
            )
          }
        >
          {value}
        </button>
      ))}
    </StyledNumpad>
  )
}
