import styled from 'styled-components'

export const StyledSolution = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  overflow-x: scroll;
  transition: all 0.3s ease;

  max-width: 206px;

  font-size: 44px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.numberColor};

  &::-webkit-scrollbar {
    width: 206px;
    height: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.numberColor};
  }
`
