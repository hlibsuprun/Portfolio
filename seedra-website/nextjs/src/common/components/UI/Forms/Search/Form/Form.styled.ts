import styled from 'styled-components';

import { em, rem } from '@styles/mixins';
import { colors, font, sizes } from '@styles/variables';

export const Form = styled.form`
  position: relative;
  max-width: ${em(285)};
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    min-width: ${em(180)};
  }
`;

export const Input = styled.input`
  width: calc(100% - (${em(30, 14)} + ${em(60, 14)}));
  height: ${em(48, 14)};
  margin: 0;
  padding: 0 ${em(30, 14)} 0 ${em(60, 14)};
  color: ${colors.text.secondary};
  border: ${em(1, 14)} solid ${colors.light.gray};
  border-radius: ${em(70, 14)};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(14)};
  font-weight: 400;
  outline: none;
  transition: all 0.3s ease;
  &:hover {
    filter: drop-shadow(0 ${em(1, 14)} ${em(6, 14)} rgba(0, 0, 0, 0.32));
  }
  &:focus {
    color: ${colors.text.primary};
    filter: drop-shadow(0 ${em(1, 14)} ${em(6, 14)} rgba(0, 0, 0, 0.32));
  }
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 50%;
  left: 0;
  display: flex;
  width: ${em(60)};
  height: 100%;
  margin: 0;
  background-color: inherit;
  border: 0;
  border-radius: 100% 0 0 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  translate: 0 50%;
  svg {
    display: block;
    width: ${em(24)};
    height: ${em(24)};
    fill: ${colors.text.secondary};
    transition: fill 0.3s ease;
  }
  &:hover svg {
    fill: ${colors.brand};
  }
`;
