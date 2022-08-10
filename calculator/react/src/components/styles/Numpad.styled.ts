import styled from 'styled-components'

export const StyledNumpad = styled.div`
  transition: all 0.3s ease;
  border-radius: 40px 40px 25px 25px;
  padding: 30px 10px;
  background-color: ${({ theme }) => theme.numpadBackground};

  & > table {
    border-spacing: 10px;
  }

  & > button {
    transition: all 0.3s ease;

    border: 0px;
    border-radius: 10px;

    padding: 0px;

    background-color: ${({ theme }) => theme.buttonBackground};

    &:hover {
      box-shadow: 0px 4px 4px ${({ theme }) => theme.hoverButton};
      cursor: pointer;
    }

    &.number {
      display: flex;
      justify-content: center;
      align-items: center;

      transition: all 0.3s ease;

      width: 45px;
      height: 45px;

      font-size: 18px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      color: ${({ theme }) => theme.numberdColor};
    }

    &.point svg {
      fill: ${({ theme }) => theme.numberdColor};
      transition: all 0.3s ease;
    }

    &.back svg {
      stroke: ${({ theme }) => theme.numberdColor};
      transition: all 0.3s ease;
    }
  }

  & > svg {
    max-width: 45px;
    max-height: 45px;
  }
`
