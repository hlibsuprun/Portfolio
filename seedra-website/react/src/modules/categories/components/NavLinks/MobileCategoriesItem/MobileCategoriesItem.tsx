import { Category, Subcategory } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import styles from './MobileCategoriesItem.module.scss';

interface MobileCategoriesItemProps {
  firstItem: boolean;
  lastItem: boolean;
  category: Category;
  handleToggleAccordion: () => void;
  open: boolean;
  handleCloseMenu: () => void;
}

export const MobileCategoriesItem: FC<MobileCategoriesItemProps> = memo(
  ({
    firstItem,
    lastItem,
    category,
    handleToggleAccordion,
    open,
    handleCloseMenu
  }) => {
    const { id, name, subcategories } = category;
    const router = useRouter();

    const path = '/';

    return (
      <li
        className={`
          ${styles.item} 
          ${lastItem ? styles.last : ''} 
          ${open ? styles.open : ''}
        `}
        key={name}>
        <Link href={path} passHref>
          <a
            className={`
              ${styles.name}
              ${styles.link} 
              ${router.pathname === path ? styles.active : ''} 
            `}
            onClick={handleCloseMenu}>
            {name}
          </a>
        </Link>
        <button
          className={`
            ${styles.button} 
            ${firstItem ? styles.first : ''}
          `}
          onClick={handleToggleAccordion}
        />
        <div className={styles.subcategories}>
          {subcategories &&
            subcategories.map((subcategory: Subcategory) => (
              <a
                className={`${styles.link} ${styles.subcategory}`}
                key={subcategory.name}
                onClick={handleCloseMenu}>
                {subcategory.name}
              </a>
            ))}
        </div>
      </li>
    );
  }
);

MobileCategoriesItem.displayName = 'MobileCategoriesItem';
