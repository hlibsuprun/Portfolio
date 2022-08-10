import styled from 'styled-components'

export const StyledThemeSwitcher = styled.div`
  transition: all 0.3s ease;
  margin: 0px auto 50px auto;
  border-radius: 15px;
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

      width: 45px;
      height: 35px;

      &.light {
        stroke: ${({ theme }) => theme.lightTheme};
        &:hover {
          stroke: ${({ theme }) => theme.themeHover};
        }
      }

      &.dark {
        fill: ${({ theme }) => theme.darkTheme};
        &:hover {
          fill: ${({ theme }) => theme.themeHover};
        }
      }
    }
  }
`
