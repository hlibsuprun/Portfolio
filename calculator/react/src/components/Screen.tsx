import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { Expression, selectExpression, selectSolution } from "../app/slices/expressionSlice";

import { Icon } from './Icon'
import { StyledProblem } from './styles/Problem.styled'
import { StyledScreen } from './styles/Screen.styled'
import { StyledSolution } from './styles/Solution.styled'

export const Screen: FC = () => {
  const expression: Expression = useSelector(selectExpression)

  const signs = {
    '/': <Icon iconName='division' />,
    '*': <Icon iconName='multiplication' />,
    '-': <Icon iconName='minus' />,
    '+': <Icon iconName='plus' />,
    '': ''
  }

  return (
    <StyledScreen>
      <StyledProblem data-testid='problem'>
        {expression.strFirstNumber}
        {signs[expression.sign]}
        {expression.strSecondNumber}
      </StyledProblem>
      <StyledSolution data-testid='solution'>
        {useSelector(selectSolution)}
      </StyledSolution>
    </StyledScreen>
  )
}
