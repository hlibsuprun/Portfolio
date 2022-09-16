import React, { FC } from 'react';

import styles from './PcPagesItem.module.scss';

interface PcPagesItem {
  pageName: string;
}

export const PcPagesItem: FC<PcPagesItem> = ({ pageName }) => {
  return (
    <li className={styles.item}>
      <a className={styles.link} href="#">
        {pageName}
      </a>
    </li>
  );
};
