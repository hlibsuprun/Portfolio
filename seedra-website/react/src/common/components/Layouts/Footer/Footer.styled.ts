import styled from 'styled-components';

import { colors, font, sizes } from '@styles/variables';
import { em, rem } from '@styles/mixins';

export const Footer = styled.footer`
  width: 100vw;
  height: fit-content;
  box-shadow: 0px -7px 80px rgba(189, 189, 189, 0.25);
`;

export const FooterContainer = styled.div`
  max-width: ${sizes.container.maxWidth};
  padding: 40px ${sizes.container.padding};
  height: 100%;
  margin: 0 auto;
`;

export const Line = styled.div`
  width: 100%;
  height: ${em(1)};
  margin: ${em(20)} 0;
  background-color: #cfcfcf;
}`;

export const OtherBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Rights = styled.div`
  color: ${colors.text.secondary};
  font-family: ${font.fontFamily.lexend};
  font-size: ${rem(14)};
  font-weight: 400;
  white-space: nowrap;
  &::selection {
    color: ${colors.white};
    background-color: ${colors.invisible.green};
  }
`;
