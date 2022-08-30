import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { themeSelector } from './app/slices/themeSlice'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'
import { StyledContainer } from './components/styles/Container.styled'
import { GlobalStyled } from './components/styles/Global.styled'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export default function App() {
  const theme = useSelector(themeSelector)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <StyledContainer>
          <ThemeSwitcher />
          <Screen />
          <Numpad />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
