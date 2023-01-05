import styled from 'styled-components';

import { em, rem } from '@styles/mixins';
import { colors, font, sizes } from '@styles/variables';

interface Props {
  second?: boolean;
  uppercase?: boolean;
}

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    flex-wrap: nowrap;
    align-items: center;
    justify-content: start;
  }
`;

export const LogoBlock = styled.div`
  order: -1;
  width: 100%;
  padding-bottom: 40px;
  a {
    position: relative;
    left: calc(50% - (125px / 2));
  }
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    position: absolute;
    left: calc(50% - 125px / 2);
    order: 0;
    width: auto;
    padding-bottom: 0;
    a {
      position: static;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    position: ${({ second }: Props) => second && 'absolute'};
    left: ${({ second }) => second && '61%'};
    flex-direction: row;
    gap: 48px;
  }
`;

export const Item = styled.li`
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    position: relative;
    &:not(:last-child)::after {
      position: absolute;
      top: -20%;
      right: -24px;
      width: ${em(1)};
      height: 150%;
      background-color: rgb(239, 239, 239);
      content: '';
    }
  }
`;

export const Link = styled.a`
  color: ${colors.text.secondary};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(14)};
  font-weight: 400;
  transition: color 0.3s ease;
  text-transform: ${({ uppercase }: Props) =>
    uppercase ? 'uppercase' : 'none'};
  white-space: nowrap;
  &:hover {
    color: ${colors.brand};
  }
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;
