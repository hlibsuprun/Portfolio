import styled from 'styled-components'

export const StyledSolution = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  overflow-x: scroll;
  transition: all 0.3s ease;
  max-width: 186px;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};

  &::-webkit-scrollbar {
    width: 368px;
    height: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.textColor};
  }

  @media (min-width: 1900px) {
    max-width: 340px;
    font-size: 75px;
    
    &::-webkit-scrollbar {
      height: 5px;
    }
  }
`
