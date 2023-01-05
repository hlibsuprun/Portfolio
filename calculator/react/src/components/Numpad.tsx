import React, { FC, MouseEvent } from 'nextjs'
import { useDispatch, useSelector } from 'nextjs-redux'

import {
  acClickHandler,
  backspaceClickHandler,
  divideClickHandler,
  equalsClickHandler,
  minusClickHandler,
  multipleClickHandler,
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
    { value: <Icon iconName='ac' />, onClick: acClickHandler() },
    { value: <Icon iconName='reverse' />, onClick: reverseClickHandler() },
    { value: <Icon iconName='percent' />, onClick: percentClickHandler() },
    { value: <Icon iconName='divide' />, onClick: divideClickHandler(solution) },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: <Icon iconName='multiple' />, onClick: multipleClickHandler(solution) },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: <Icon iconName='minus' />, onClick: minusClickHandler(solution) },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: <Icon iconName='plus' />, onClick: plusClickHandler(solution) },
    { value: <Icon iconName='backspace' />, onClick: backspaceClickHandler() },
    { value: '0' },
    { value: <Icon iconName='point' />, onClick: pointClickHandler() },
    { value: <Icon iconName='equals' />, onClick: equalsClickHandler(solution) }
  ]

  return (
    <StyledNumpad data-testid='numpad'>
      {buttons.map(({ value, onClick }, index) => (
        <button
          key={index}
          onClick={(event: MouseEvent<HTMLButtonElement>) => onClick ? dispatch(onClick) : numberClickHandler(event) }
        >
          {value}
        </button>
      ))}
    </StyledNumpad>
  )
}
