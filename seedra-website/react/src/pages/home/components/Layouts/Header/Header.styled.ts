import styled from 'styled-components';

import { sizes } from '@styles/variables';

export const Header = styled.header`
  width: 100vw;
  height: fit-content;
`;

export const HeaderContainer = styled.div`
  max-width: ${sizes.container.maxWidth};
  padding: 18px ${sizes.container.padding};
  height: 100%;
  margin: 0 auto;
`;
