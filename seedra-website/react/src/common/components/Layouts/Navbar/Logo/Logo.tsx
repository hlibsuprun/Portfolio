import Link from 'next/link';
import React, { FC, memo } from 'react';

import LogoSVG from '@/assets/images/logo.svg';

import styles from './Logo.module.scss';

interface LogoProps {
  handleCloseMenu: () => void;
}

export const Logo: FC<LogoProps> = memo(({ handleCloseMenu }) => {
  return (
    <div className={styles.div}>
      <Link href="/" passHref>
        <a className={styles.link} onClick={handleCloseMenu}>
          <LogoSVG />
        </a>
      </Link>
    </div>
  );
});

Logo.displayName = 'Logo';
