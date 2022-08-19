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
  color: ${({ theme }) => theme.numberColor};

  &::-webkit-scrollbar {
    width: 368px;
    height: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.numberColor};
  }

  @media (min-width: 2560px) {
    max-width: 340px;

    font-size: 45px;

    &::-webkit-scrollbar {
      height: 5px;
    }
  }
`
