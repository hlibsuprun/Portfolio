import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { RootState } from './app/store'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'
import { StyledContainer } from './components/styles/Container.styled'
import { GlobalStyled } from './components/styles/Global.styled'
import { dark, light } from './components/styles/helpers/themes'

export default function App() {
  const darkTheme = useSelector((state: RootState) => state.theme.dark)

  return (
    <>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyled />
        <StyledContainer>
          <Screen />
          <Numpad />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
