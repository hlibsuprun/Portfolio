import styled from 'styled-components'

export const StyledNumpad = styled.div`
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 15px;

  border-radius: 40px 40px 25px 25px;

  padding: 45px 25px;

  background-color: ${({ theme }) => theme.numpadBackground};

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
      color: ${({ theme }) => theme.numberColor};
    }

    &.point svg {
      fill: ${({ theme }) => theme.numberColor};
      transition: all 0.3s ease;
    }

    &.backspace svg {
      stroke: ${({ theme }) => theme.numberColor};
      transition: all 0.3s ease;
    }

    & > svg {
      width: 45px;
      height: 45px;
    }
  }
`
