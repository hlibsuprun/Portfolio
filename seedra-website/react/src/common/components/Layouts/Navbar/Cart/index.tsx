import React, { memo } from 'react';

import { Icon } from '@components/UI/Icon';

import { Button } from './Cart.styled';

export const Cart = memo(() => {
  return (
    <Button>
      <Icon iconName="cart" />
    </Button>
  );
});

Cart.displayName = 'Cart';
