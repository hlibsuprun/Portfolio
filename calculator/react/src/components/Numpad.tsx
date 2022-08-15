import React, { Dispatch, FC, SetStateAction } from 'react'

import { Expression } from '../App'
import { Button } from '../models/Button'
import { Icon } from './Icon'
import { StyledNumpad } from './styles/Numpad.styled'

type NumpadProps = {
  expression: Expression
  setExpression: Dispatch<SetStateAction<Expression>>
}

export const Numpad: FC<NumpadProps> = ({ expression, setExpression }) => {
  const ButtonModels = new Button(expression)

  const buttons = [
    { value: <Icon iconName='ac' />, onClick: ButtonModels.ac() },
    { value: <Icon iconName='plus-slash-minus' /> },
    { value: <Icon iconName='percent' /> },
    { value: <Icon iconName='division' /> },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: <Icon iconName='multiplication' /> },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: <Icon iconName='minus' /> },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: <Icon iconName='plus' /> },
    { value: <Icon iconName='back' />, className: 'back' },
    { value: '0' },
    { value: <Icon iconName='point' />, className: 'point' },
    { value: <Icon iconName='equals' /> }
  ]

  return (
    <StyledNumpad>
      {buttons.map(({ value, className, onClick }, index) => (
        <button
          key={index}
          className={typeof value === 'string' ? 'number' : className}
          onClick={() => setExpression(onClick)}
        >
          {value}
        </button>
      ))}
    </StyledNumpad>
  )
}
