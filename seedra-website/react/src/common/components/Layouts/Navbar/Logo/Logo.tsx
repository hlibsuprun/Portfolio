import Link from 'next/link';
import React, { FC, memo } from 'react';

import LogoSVG from '@/assets/images/logo.svg';

import styles from './Logo.module.scss';

interface LogoProps {
  handleCloseMenu: () => void;
}

export const Logo: FC<LogoProps> = memo(({ handleCloseMenu }) => {
  return (
    <Link href="/" passHref>
      <a className={styles.link} onClick={handleCloseMenu}>
        <LogoSVG />
      </a>
    </Link>
  );
});

Logo.displayName = 'Logo';
