import styled from 'styled-components'

export const StyledThemeSwitcher = styled.div`
  transition: all 0.3s ease;
  margin: 0px auto 10vh auto;
  border-radius: 10px;
  width: fit-content;
  background-color: ${({ theme }) => theme.numpadBackground};

  & > button {
    transition: all 0.3s ease;
    border: 0px;
    padding: 0px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }

    & > svg {
      transition: all 0.3s ease;

      max-width: 45px;
      max-height: 35px;

      &.light {
        stroke: ${({ theme }) => theme.lightTheme};
        &:hover {
          stroke: ${({ theme }) => theme.hoverTheme};
        }
      }

      &.dark {
        fill: ${({ theme }) => theme.darkTheme};
        &:hover {
          fill: ${({ theme }) => theme.hoverTheme};
        }
      }
    }
  }

  @media (min-width: 1600px) {
    margin: 0px auto 60px auto;
    border-radius: 15px;
  }

  @media (min-width: 2560px) {
    margin: 0px auto 120px auto;
    border-radius: 20px;

    & > button {
      & > svg {
        max-width: 75px;
        max-height: 65px;
      }
    }
  }
`
