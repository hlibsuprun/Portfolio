import styled from 'styled-components';

import { em, rem } from '@styles/mixins';
import { colors, font } from '@styles/variables';

export const Products = styled.div`
  z-index: 100;
  position: absolute;
  top: calc(100% + ${em(10)});
  width: calc(100% - ${em(20)});
  max-height: 50vh;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
  filter: drop-shadow(0 ${em(1, 14)} ${em(3, 14)} rgba(0, 0, 0, 0.16));
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${em(10)};
  max-height: inherit;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 14px 14px transparent;
    border: solid 4px transparent;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px #bbbbbe;
    border: solid 4px transparent;
    border-radius: 14px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const Item = styled.li`
  width: 100%;
  min-height: fit-content;
  max-height: 10vh;
  padding: 5px 0;
`;

export const Link = styled.a`
  display: -webkit-box;
  max-height: inherit;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  font-family: ${font.fontFamily.lexend};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${em(20, 14)};
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.brand};
  }
  &:active {
    color: ${colors.primary};
  }
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;
