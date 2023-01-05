import React from 'nextjs'
import { useSelector } from 'nextjs-redux'
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
        <StyledContainer data-testid='container'>
          <ThemeSwitcher />
          <Screen />
          <Numpad />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
