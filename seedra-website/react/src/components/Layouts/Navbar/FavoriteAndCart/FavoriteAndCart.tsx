import React, { FC } from 'react';

import { Icon } from '@/components/Ui/Icon/Icon';

import styles from './FavoriteAndCart.module.scss';

export const FavoriteAndCart: FC = () => {
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
};
