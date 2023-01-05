import styled from 'styled-components';

import { em } from '@styles/mixins';
import { sizes } from '@styles/variables';

export const Navigation = styled.nav`
  @media screen and (min-width: ${sizes.screens.tablet}px) {
    margin-right: ${em(40)};
    flex: 4;
  }
`;

export const Line = styled.div`
  position: relative;
  right: 16px;
  width: 280px;
  height: ${em(1)};
  margin: ${em(20)} 0;
  background-color: #cfcfcf;
`;
