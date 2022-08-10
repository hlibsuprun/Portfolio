import React, { FC } from 'react'

import { Problem } from './Problem'
import { Solution } from './Solution'
import { StyledScreen } from './styles/Screen.styled'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Screen: FC = () => {
  return (
    <StyledScreen>
      <ThemeSwitcher />
      <Problem />
      <Solution />
    </StyledScreen>
  )
}
