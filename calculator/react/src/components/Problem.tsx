import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../app/store'
import { Icon } from './Icon'
import { StyledProblem } from './styles/Problem.styled'

export const Problem: FC = () => {
  const { firstNumber, sign, secondNumber } = useSelector(
    (state: RootState) => state.expression
  )

  const signs = {
    '/': <Icon iconName='division' />,
    '*': <Icon iconName='multiplication' />,
    '-': <Icon iconName='minus' />,
    '+': <Icon iconName='plus' />,
    '': ''
  }

  return (
    <StyledProblem>
      {firstNumber}
      {signs[sign]}
      {secondNumber}
    </StyledProblem>
  )
}
