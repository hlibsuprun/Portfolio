import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    width: 100vw;
    height: 100vh;

    background-color: antiquewhite;
  }
`
