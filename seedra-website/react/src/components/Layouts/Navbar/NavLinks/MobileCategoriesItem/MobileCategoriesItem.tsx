import React, { FC } from 'react';

import { Category } from '@/components/Layouts/Navbar/NavLinks/categories';

import styles from './MobileCategoriesItem.module.scss';

interface MobileCategoriesItemProps {
  last: boolean;
  category: Category;
  onClick: () => void;
  open: boolean;
}

export const MobileCategoriesItem: FC<MobileCategoriesItemProps> = ({
  last,
  category,
  onClick,
  open
}) => {
  return (
    <li
      className={`${styles.item} ${last && styles.last} ${open && styles.open}`}
      key={category.name}>
      <a className={`${styles.link} ${styles.name}`} href="#">
        {category.name}
      </a>
      {category.products && (
        <button className={styles.button} onClick={onClick} />
      )}
      <div className={styles.products}>
        {category.products &&
          category.products.map((product) => (
            <a
              className={`${styles.link} ${styles.product}`}
              href="#"
              key={product}>
              {product}
            </a>
          ))}
      </div>
    </li>
  );
};
