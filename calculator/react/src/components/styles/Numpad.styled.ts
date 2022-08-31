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
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    padding: 0;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.buttonBackgroundColor};

    &:hover {
      box-shadow: 0 4px 4px ${({ theme }) => theme.hoverButton};
      cursor: pointer;
    }

    & > svg {
      max-width: 40px;
      max-height: 40px;

      &#backspace {
        transition: all 0.3s ease;
        stroke: ${({ theme }) => theme.textColor};
      }

      &#point {
        transition: all 0.3s ease;
        fill: ${({ theme }) => theme.textColor};
      }
    }
  }

  @media (min-width: 1600px) {
    & > button {
      border-radius: 10px;
      font-size: 16px;
    }
  }

  @media (min-width: 1900px) {
    grid-gap: 20px;
    border-radius: 60px 60px 50px 50px;

    & > button {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      font-size: 25px;

      & > svg {
        max-width: 70px;
        max-height: 70px;
      }
    }
  }
`
