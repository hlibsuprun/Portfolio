import styled from 'styled-components';

import { sizes } from '@styles/variables';

export const List = styled.ul`
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    display: flex;
    text-transform: uppercase;
    gap: 48px;
    flex-direction: row;
    white-space: nowrap;
  }
`;
