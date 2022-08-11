import React, { FC } from 'react'

import { Icon } from './Icon'
import { StyledNumpad } from './styles/Numpad.styled'

export const Numpad: FC = () => {
  const buttons = [
    { value: <Icon iconName='ac' />, id: Math.random() },
    { value: <Icon iconName='plus-slash-minus' />, id: Math.random() },
    { value: <Icon iconName='percent' />, id: Math.random() },
    { value: <Icon iconName='division' />, id: Math.random() },
    { value: '7', id: Math.random() },
    { value: '8', id: Math.random() },
    { value: '9', id: Math.random() },
    { value: <Icon iconName='multiplication' />, id: Math.random() },
    { value: '4', id: Math.random() },
    { value: '5', id: Math.random() },
    { value: '6', id: Math.random() },
    { value: <Icon iconName='minus' />, id: Math.random() },
    { value: '1', id: Math.random() },
    { value: '2', id: Math.random() },
    { value: '3', id: Math.random() },
    { value: <Icon iconName='plus' />, id: Math.random() },
    { value: <Icon iconName='back' />, className: 'back', id: Math.random() },
    { value: '0', id: Math.random() },
    { value: <Icon iconName='point' />, className: 'point', id: Math.random() },
    { value: <Icon iconName='equals' />, id: Math.random() }
  ]

  return (
    <StyledNumpad>
      {buttons.map(({ value, id, className }) => (
        <button
          key={id}
          className={typeof value === 'string' ? 'number' : className}
        >
          {value}
        </button>
      ))}
    </StyledNumpad>
  )
}
