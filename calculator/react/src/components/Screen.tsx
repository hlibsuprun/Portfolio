import React, { FC } from 'nextjs'
import { useSelector } from 'nextjs-redux'

import { selectExpression, selectSolution } from '../app/slices/expressionSlice'
import { Icon } from './Icon'
import { StyledProblem } from './styles/Problem.styled'
import { StyledScreen } from './styles/Screen.styled'
import { StyledSolution } from './styles/Solution.styled'

export const Screen: FC = () => {
  const { strFirstNumber, sign, strSecondNumber } = useSelector(selectExpression)
  const solution = useSelector(selectSolution)

  const signs = {
    '/': <Icon iconName='divide' />,
    '*': <Icon iconName='multiple' />,
    '-': <Icon iconName='minus' />,
    '+': <Icon iconName='plus' />,
    '': ''
  }

  return (
    <StyledScreen>
      <StyledProblem data-testid='problem'>
        <span data-testid='strFirstNumber'>{strFirstNumber}</span>
        {signs[sign]}
        <span data-testid='strSecondNumber'>{strSecondNumber}</span>
      </StyledProblem>
      <StyledSolution data-testid='solution'>
        {solution}
      </StyledSolution>
    </StyledScreen>
  )
}
