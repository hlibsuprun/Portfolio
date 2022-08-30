import React, { FC, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  acClickHandler,
  backspaceClickHandler,
  divisionClickHandler,
  equalsClickHandler,
  minusClickHandler,
  multiplicationClickHandler,
  numberClickHandler as clickHandler,
  percentClickHandler,
  plusClickHandler,
  pointClickHandler,
  reverseClickHandler,
  selectSolution
} from '../app/slices/expressionSlice'
import { Icon } from './Icon'
import { StyledNumpad } from './styles/Numpad.styled'

export const Numpad: FC = () => {
  const dispatch = useDispatch()
  const solution = useSelector(selectSolution)

  const numberClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    const innerHTML: string = (event.target as HTMLTextAreaElement).innerHTML

    dispatch(clickHandler(innerHTML))
  }

  const buttons = [
    {
      value: <Icon iconName='ac' />,
      onClick: acClickHandler
    },
    {
      value: <Icon iconName='plus-slash-minus' />,
      onClick: reverseClickHandler
    },
    { value: <Icon iconName='percent' />, onClick: percentClickHandler },
    { value: <Icon iconName='division' />, onClick: divisionClickHandler(solution) },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: <Icon iconName='multiplication' />, onClick: multiplicationClickHandler(solution) },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: <Icon iconName='minus' />, onClick: minusClickHandler(solution) },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: <Icon iconName='plus' />, onClick: plusClickHandler(solution) },
    { value: <Icon iconName='backspace' />, id: 'backspace', onClick: backspaceClickHandler() },
    { value: '0' },
    { value: <Icon iconName='point' />, id: 'point', onClick: pointClickHandler() },
    { value: <Icon iconName='equals' />, onClick: equalsClickHandler(solution) }
  ]

  return (
    <StyledNumpad>
      {buttons.map(({ value, onClick, id }, index) => (
        <button
          key={index}
          id={id}
          onClick={(event: MouseEvent<HTMLButtonElement>) => onClick ? dispatch(onClick) : numberClickHandler(event) }
        >
          {value}
        </button>
      ))}
    </StyledNumpad>
  )
}
