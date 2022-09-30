import Link from 'next/link';
import React, { FC, memo } from 'react';

import LogoSVG from '@images/logo.svg';

import styles from './Logo.module.scss';

export const Logo: FC = memo(() => {
  return (
    <div className={styles.div}>
      <Link href="/" passHref>
        <a className={styles.link}>
          <LogoSVG />
        </a>
      </Link>
    </div>
  );
});

Logo.displayName = 'Logo';
