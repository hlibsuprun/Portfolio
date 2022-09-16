import React, { FC } from 'react';

import styles from './MobilePagesItem.module.scss';

interface MobilePagesItemProps {
  pageName: string;
}

export const MobilePagesItem: FC<MobilePagesItemProps> = ({ pageName }) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href="#">
        {pageName}
        <div className={styles.arrow}></div>
      </a>
    </li>
  );
};
