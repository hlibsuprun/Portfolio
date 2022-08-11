import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../app/store'
import { StyledSolution } from './styles/Solution.styled'

export const Solution: FC = () => {
  const solution = useSelector((state: RootState) => state.expression.solution)

  return <StyledSolution>{solution}</StyledSolution>
}
