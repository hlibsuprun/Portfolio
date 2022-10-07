import styled from 'styled-components';

import { em } from '@styles/mixins';

export const List = styled.ul`
  display: flex;
  margin-top: ${em(20)};
  gap: ${em(22)};
  flex-direction: column;
`;
