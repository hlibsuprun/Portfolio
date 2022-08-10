import styled from 'styled-components'

export const StyledProblem = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  overflow: auto;
  transition: all 0.3s ease;

  margin: 0px 0px 5px 0px;

  max-width: 206px;
  height: 25px;

  font-size: 21px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.numberdColor};

  & > svg {
    width: 25px;
    height: 25px;
  }
`
