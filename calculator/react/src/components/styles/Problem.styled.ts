import styled from 'styled-components'

export const StyledProblem = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  overflow: auto;
  transition: all 0.3s ease;
  margin-bottom: 5px;
  max-width: 186px;
  height: 25px;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};

  & > svg {
    max-width: 25px;
    max-height: 25px;
  }

  @media (min-width: 1900px) {
    margin-bottom: 10px;
    max-width: 340px;
    height: 50px;
    font-size: 40px;

    & > svg {
      max-width: 40px;
      max-height: 40px;
    }
  }
`
