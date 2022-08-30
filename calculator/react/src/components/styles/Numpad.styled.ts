import styled from 'styled-components'

export const StyledNumpad = styled.div`
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;

  border-radius: 40px 40px 25px 25px;

  padding: 45px 25px;

  background-color: ${({ theme }) => theme.blocksBackgroundColor};

  & > button {
    transition: all 0.3s ease;

    border: 0px;
    border-radius: 5px;

    padding: 0px;

    background-color: ${({ theme }) => theme.buttonBackgroundColor};

    &:hover {
      box-shadow: 0px 4px 4px ${({ theme }) => theme.hoverButton};
      cursor: pointer;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 40px;
    max-height: 40px;

    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
  

    &#point {
      fill: ${({ theme }) => theme.textColor};
      transition: all 0.3s ease;
    }

    &#backspace {
      stroke: ${({ theme }) => theme.textColor};
      transition: all 0.3s ease;
    }
    
    & > svg {
      max-width: 40px;
      max-height: 40px;
    }
  }

  @media (min-width: 1600px) {
    & > button {
      border-radius: 10px;

      &.number {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 2560px) {
    grid-gap: 20px;

    border-radius: 60px 60px 50px 50px;

    & > button {
      border-radius: 20px;

      &.number {
        width: 70px;
        height: 70px;

        font-size: 25px;
      }

      & > svg {
        max-width: 70px;
        max-height: 70px;
      }
    }
  }
`
