import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import styles from './PcPagesItem.module.scss';

interface PcPagesItem {
  pageName: string;
}

export const PcPagesItem: FC<PcPagesItem> = memo(({ pageName }) => {
  const router = useRouter();

  const path = '/'.concat(pageName.toLowerCase().replace(' ', '-'));

  return (
    <li className={styles.item}>
      <Link href={path} passHref>
        <a
          className={`
            ${styles.link} 
            ${router.pathname === path ? styles.active : ''}
          `}>
          {pageName}
        </a>
      </Link>
    </li>
  );
});

PcPagesItem.displayName = 'PcPagesItem';
