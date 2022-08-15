import React, { FC } from 'react'

import { Expression } from '../App'
import { Icon } from './Icon'
import { StyledProblem } from './styles/Problem.styled'
import { StyledScreen } from './styles/Screen.styled'
import { StyledSolution } from './styles/Solution.styled'
import { ThemeSwitcher } from './ThemeSwitcher'

type ScreenProps = {
  expression: Expression
}

export const Screen: FC<ScreenProps> = ({
  expression: { firstNumber, sign, secondNumber, solution }
}) => {
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
      <StyledProblem>
        {firstNumber}
        {signs[sign]}
        {secondNumber}
      </StyledProblem>
      <StyledSolution>{solution}</StyledSolution>
    </StyledScreen>
  )
}
