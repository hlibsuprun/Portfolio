import React, { FC, memo } from 'react';

import {
  Footer as FooterStyled,
  FooterContainer,
  Line,
  OtherBlock,
  Rights
} from './Footer.styled';

import { SocialMedia } from '@components/Layouts/SocialMedia';

import { Navigation } from './Navigation';

export const Footer: FC = memo(() => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Navigation />
        <Line />
        <OtherBlock>
          <SocialMedia />
          <Rights>All rights reserved</Rights>
        </OtherBlock>
      </FooterContainer>
    </FooterStyled>
  );
});

Footer.displayName = 'Footer';
