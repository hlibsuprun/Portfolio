import React, { FC } from 'react';

import LogoSVG from '@/assets/images/logo.svg';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <a className={styles.link} href="#">
      <img className={styles.img} src={LogoSVG} alt="logo" />
    </a>
  );
};
