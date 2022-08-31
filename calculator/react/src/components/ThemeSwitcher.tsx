import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { toggleDarkTheme, toggleLightTheme } from '../app/slices/themeSlice'
import { Icon } from './Icon'
import { StyledThemeSwitcher } from './styles/ThemeSwitcher.styled'

export const ThemeSwitcher: FC = () => {
  const dispatch = useDispatch()

  return (
    <StyledThemeSwitcher data-testid='theme-switcher'>
      <button onClick={() => dispatch(toggleLightTheme())}>
        <Icon iconName='light' />
      </button>
      <button onClick={() => dispatch(toggleDarkTheme())}>
        <Icon iconName='dark' />
      </button>
    </StyledThemeSwitcher>
  )
}
