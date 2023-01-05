import styled from 'styled-components';

import { em, rem } from '@styles/mixins';
import { colors, font, sizes } from '@styles/variables';

export const Item = styled.li`
  position: relative;

  @media screen and (max-width: ${sizes.screens.tablet}px) {
    &:not(:last-child) {
      margin-bottom: ${em(15)};
    }
  }

  @media screen and (min-width: ${sizes.screens.tablet}px) {
    &:not(:last-child):after {
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
  display: flex;
  width: 100%;
  color: ${colors.text.primary};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(16)};
  font-weight: 500;
  justify-content: space-between;
  transition: color 0.3s ease;
  white-space: nowrap;
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    display: initial;
    color: ${colors.text.secondary};
    font-weight: 400;
  }
  &:hover {
    color: ${colors.brand};
  }
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;

export const Arrow = styled.div`
  position: relative;
  height: ${em(20)};
  width: ${em(20)};
  border-radius: 100%;
  background-color: ${colors.brand};
  &::before,
  &::after {
    position: absolute;
    right: ${em(4.5)};
    margin: ${em(3)};
    content: '';
    width: ${em(3)};
    height: ${em(8)};
    border-radius: ${em(3)};
    background-color: ${colors.white};
  }
  &::before {
    top: ${em(1)};
    rotate: -45deg;
  }
  &::after {
    bottom: ${em(1)};
    rotate: 45deg;
  }
`;
