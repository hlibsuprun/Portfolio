import React, { FC, memo } from 'react';

import { Icon } from '@/common/components/UI/Icon/Icon';

import styles from './SocialMedia.module.scss';

export const SocialMedia: FC = memo(() => {
  return (
    <div className={styles.div}>
      <a
        href="https://www.instagram.com/seedra_seeds/?hl=en"
        target="_blank"
        rel="noreferrer">
        <Icon iconName="instagram" />
      </a>
      <a
        href="https://www.facebook.com/seedra.seeds"
        target="_blank"
        rel="noreferrer">
        <Icon iconName="facebook" />
      </a>
    </div>
  );
});

SocialMedia.displayName = 'SocialMedia';
