import styled from 'styled-components'

export const StyledContainer = styled.div`
  user-select: none;
  transition: all 0.3s ease;
  border-radius: 25px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.containerBackgroundColor};

  @media (min-width: 1900px) {
    border-radius: 50px;
    padding-top: 40px;
  }
`
