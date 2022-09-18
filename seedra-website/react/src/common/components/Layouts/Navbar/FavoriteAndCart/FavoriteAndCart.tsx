import React, { FC, memo } from 'react';

import { Icon } from '@/common/components/UI/Icon/Icon';

import styles from './FavoriteAndCart.module.scss';

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
