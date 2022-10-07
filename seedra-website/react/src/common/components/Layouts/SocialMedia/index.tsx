import React, { FC, memo } from 'react';

import { Block, Link } from './SocialMedia.styled';

import { Icon } from '@components/UI/Icon';

export const SocialMedia: FC = memo(() => {
  return (
    <Block>
      <Link
        href="https://www.instagram.com/seedra_seeds"
        target="_blank"
        rel="noreferrer">
        <Icon iconName="instagram" />
      </Link>
      <Link
        href="https://www.facebook.com/seedra.seeds"
        target="_blank"
        rel="noreferrer">
        <Icon iconName="facebook" />
      </Link>
    </Block>
  );
});

SocialMedia.displayName = 'SocialMedia';
