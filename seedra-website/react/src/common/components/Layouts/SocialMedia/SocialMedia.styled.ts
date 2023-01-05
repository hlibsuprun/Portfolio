import styled from 'styled-components';

import { em } from '@styles/mixins';
import { colors } from '@styles/variables';

export const Block = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const Link = styled.a`
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
