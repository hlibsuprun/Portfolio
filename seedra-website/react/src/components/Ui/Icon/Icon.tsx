import React, { FC } from 'react';

import sprite from '@/assets/images/icons/sprite.svg';

import styles from './Icon.module.scss';

interface IconProps {
  iconName: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ className, iconName }) => {
  return (
    <svg className={`${className} ${styles.svg}`} id={iconName}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};
