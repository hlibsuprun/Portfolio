import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import { Category } from '@/common/components/Layouts/Navbar/NavLinks/categories';

import styles from './MobileCategoriesItem.module.scss';

interface MobileCategoriesItemProps {
  lastItem: boolean;
  category: Category;
  handleToggleAccordion: () => void;
  open: boolean;
  handleCloseMenu: () => void;
}

export const MobileCategoriesItem: FC<MobileCategoriesItemProps> = memo(
  ({ lastItem, category, handleToggleAccordion, open, handleCloseMenu }) => {
    const router = useRouter();

    const path =
      category.name === 'All products'
        ? '/'.concat(category.name.toLowerCase().replace(' ', '-'))
        : '/';

    return (
      <li
        className={`
        ${styles.item} 
        ${lastItem && styles.last} 
        ${open && styles.open}
      `}
        key={category.name}>
        <Link href={path} passHref>
          <a
            className={`
              ${styles.name}
              ${styles.link} 
              ${router.pathname === path ? styles.active : ''} 
            `}
            onClick={handleCloseMenu}>
            {category.name}
          </a>
        </Link>
        {category.products && (
          <button className={styles.button} onClick={handleToggleAccordion} />
        )}
        <div className={styles.products}>
          {category.products &&
            category.products.map((product) => (
              <a
                className={`${styles.link} ${styles.product}`}
                key={product}
                onClick={handleCloseMenu}>
                {product}
              </a>
            ))}
        </div>
      </li>
    );
  }
);

MobileCategoriesItem.displayName = 'MobileCategoriesItem';
