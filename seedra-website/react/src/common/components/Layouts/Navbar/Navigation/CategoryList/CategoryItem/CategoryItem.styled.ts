import styled from 'styled-components';

import { em, rem } from '@styles/mixins';
import { colors, font } from '@styles/variables';

export const Item = styled.li`
  position: relative;
  &:not(:last-child)::after {
    position: absolute;
    right: 0;
    bottom: ${em(-11)};
    display: block;
    width: 100%;
    height: ${em(1)};
    background-color: ${colors.light.gray};
    content: '';
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryName = styled.span`
  color: ${colors.text.primary};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(16)};
  font-weight: 500;
  text-transform: capitalize;
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }

  &.open {
    color: ${colors.primary};
  }
`;

export const Arrow = styled.div`
  &::before,
  &::after {
    position: absolute;
    right: 0;
    width: ${em(3)};
    height: ${em(10)};
    margin: ${em(3)};
    background-color: ${colors.text.secondary};
    border-radius: ${em(3)};
    content: '';
    transition: all 0.25s ease;
    translate: 0 -75%;
  }
  &::before {
    right: ${em(5.5)};
    rotate: -45deg;
  }
  &::after {
    right: 0;
    rotate: 45deg;
  }

  &.open {
    &::before,
    &::after {
      background-color: ${colors.primary};
    }
    &::before {
      rotate: -135deg;
    }
    &::after {
      rotate: 135deg;
    }
  }
`;

export const Subcategories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 30px;
  gap: ${em(15)};
`;

export const SubcategoryLink = styled.div`
  color: ${colors.text.secondary};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(16)};
  font-weight: 300;
  text-transform: capitalize;
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;
