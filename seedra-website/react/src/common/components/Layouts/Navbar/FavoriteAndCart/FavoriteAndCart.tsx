import React, { FC, memo } from 'react';

import styles from './FavoriteAndCart.module.scss';

import { Icon } from '@components/UI/Icon/Icon';

export const FavoriteAndCart: FC = memo(() => {
  return (
    <div className={styles.div}>
      <button>
        <Icon iconName="heart-outline" />
      </button>
      <button>
        <Icon iconName="cart" />
      </button>
    </div>
  );
});

FavoriteAndCart.displayName = 'FavoriteAndCart';
