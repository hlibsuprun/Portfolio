import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { RootState } from './app/store'
import { Numpad } from './components/Numpad'
import { Screen } from './components/Screen'
import { StyledContainer } from './components/styles/Container.styled'
import { GlobalStyled } from './components/styles/Global.styled'
import { dark, light } from './components/styles/helper/themes'

export type Expression = {
  firstNumber: string
  sign: '/' | '*' | '-' | '+' | ''
  secondNumber: string
}

export default function App() {
  const darkTheme = useSelector((state: RootState) => state.theme.dark)

  const [expression, setExpression] = useState<Expression>({
    firstNumber: '',
    sign: '',
    secondNumber: ''
  })

  return (
    <>
      <ThemeProvider theme={darkTheme ? dark : light}>
        <GlobalStyled />
        <StyledContainer>
          <Screen expression={expression} />
          <Numpad expression={expression} setExpression={setExpression} />
        </StyledContainer>
      </ThemeProvider>
    </>
  )
}
