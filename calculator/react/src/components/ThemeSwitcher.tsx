import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import { toggleDarkTheme, toggleLightTheme } from '../app/slices/themeSlice'
import { Icon } from './Icon'
import { StyledThemeSwitcher } from './styles/ThemeSwitcher.styled'

export const ThemeSwitcher: FC = () => {
  const dispatch = useDispatch()

  return (
    <StyledThemeSwitcher>
      <button onClick={() => dispatch(toggleLightTheme())}>
        <Icon className='light' iconName='light' />
      </button>
      <button onClick={() => dispatch(toggleDarkTheme())}>
        <Icon className='dark' iconName='dark' />
      </button>
    </StyledThemeSwitcher>
  )
}
