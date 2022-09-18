import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import styles from './MobilePagesItem.module.scss';

interface MobilePagesItemProps {
  pageName: string;
  handleCloseMenu: () => void;
}

export const MobilePagesItem: FC<MobilePagesItemProps> = memo(
  ({ pageName, handleCloseMenu }) => {
    const router = useRouter();

    const path = '/'.concat(pageName.toLowerCase().replace(' ', '-'));

    return (
      <li className={styles.item}>
        <Link href={path} passHref>
          <a
            className={`
              ${styles.link} 
              ${router.pathname === path ? styles.active : ''}
            `}
            onClick={handleCloseMenu}>
            {pageName}
            <div className={styles.arrow}></div>
          </a>
        </Link>
      </li>
    );
  }
);

MobilePagesItem.displayName = 'MobilePagesItem';
