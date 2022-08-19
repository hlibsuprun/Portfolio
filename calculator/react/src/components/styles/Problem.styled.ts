import styled from 'styled-components'

export const StyledProblem = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  overflow: auto;
  transition: all 0.3s ease;

  margin: 0px 0px 5px 0px;

  max-width: 186px;
  height: 25px;

  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.numberColor};

  & > svg {
    max-width: 25px;
    max-height: 25px;
  }

  @media (min-width: 2560px) {
    margin: 0px 0px 10px 0px;

    max-width: 340px;
    height: 25px;

    font-size: 25px;

    & > svg {
      max-width: 30px;
      max-height: 30px;
    }
  }
`
