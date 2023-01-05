import React, { memo } from 'react';

import { Icon } from '@components/UI/Icon';

import { Button } from './Favorite.styled';

export const Favorite = memo(() => {
  return (
    <Button>
      <Icon iconName="heart-outline" />
    </Button>
  );
});

Favorite.displayName = 'Favorite';
