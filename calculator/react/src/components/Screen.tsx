import React, { FC } from 'react'

import { Expression } from '../App'
import { solutionCalculation } from '../helpers/solutionCalculation'
import { Icon } from './Icon'
import { StyledProblem } from './styles/Problem.styled'
import { StyledScreen } from './styles/Screen.styled'
import { StyledSolution } from './styles/Solution.styled'
import { ThemeSwitcher } from './ThemeSwitcher'

type ScreenProps = {
  expression: Expression
}

export const Screen: FC<ScreenProps> = ({ expression }) => {
  const signs = {
    '/': <Icon iconName='division' />,
    '*': <Icon iconName='multiplication' />,
    '-': <Icon iconName='minus' />,
    '+': <Icon iconName='plus' />,
    '': ''
  }

  return (
    <StyledScreen>
      <ThemeSwitcher />
      <StyledProblem data-testid='problem'>
        {expression.firstNumber}
        {signs[expression.sign]}
        {expression.secondNumber}
      </StyledProblem>
      <StyledSolution data-testid='solution'>
        {solutionCalculation(expression)}
      </StyledSolution>
    </StyledScreen>
  )
}
