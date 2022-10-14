import React, { FC, memo } from 'react';

import {
  Footer as FooterStyled,
  FooterContainer,
  OtherBlock,
  Rights
} from './Footer.styled';

import { SocialMedia } from '@components/Layouts/SocialMedia';

import { Navigation } from './Navigation';

interface Props {}

export const Footer: FC<Props> = memo(() => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Navigation />
        <hr />
        <OtherBlock>
          <SocialMedia />
          <Rights>All rights reserved</Rights>
        </OtherBlock>
      </FooterContainer>
    </FooterStyled>
  );
});

Footer.displayName = 'Footer';
