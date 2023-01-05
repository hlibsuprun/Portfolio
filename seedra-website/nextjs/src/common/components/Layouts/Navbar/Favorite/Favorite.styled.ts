import styled from 'styled-components';

import { em } from '@styles/mixins';
import { colors, sizes } from '@styles/variables';

export const Button = styled.button`
  border: ${em(1)} solid ${colors.light.gray};
  border-radius: 100%;
  padding: ${em(8)};
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    border: none;
    padding: 0;
  }

  svg {
    display: block;
    width: ${em(24)};
    height: ${em(24)};
  }
`;
