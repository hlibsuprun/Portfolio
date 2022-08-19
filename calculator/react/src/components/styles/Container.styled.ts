import styled from 'styled-components'

export const StyledContainer = styled.div`
  user-select: none;
  transition: all 0.3s ease;

  border-radius: 25px;

  background-color: ${({ theme }) => theme.calculatorBackground};

  @media (min-width: 2560px) {
    border-radius: 50px;
  }
`
