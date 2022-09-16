import React, { FC, useState } from 'react';

import { categories } from '@/components/Layouts/Navbar/NavLinks/categories';
import { MobileCategoriesItem } from '@/components/Layouts/Navbar/NavLinks/MobileCategoriesItem/MobileCategoriesItem';
import { MobilePagesItem } from '@/components/Layouts/Navbar/NavLinks/MobilePagesItem/MobilePagesItem';
import { PcPagesItem } from '@/components/Layouts/Navbar/NavLinks/PcPagesItem/PcPagesItem';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

import styles from './NavLinks.module.scss';

export const NavLinks: FC = () => {
  const { width } = useWindowSize();
  const [clicked, setClicked] = useState<number | null>();

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const pcNavLinks = (
    <ul className={`${styles.list} ${styles.pc}`}>
      {['all products', 'about seedra', 'our blog'].map((pageName) => (
        <PcPagesItem key={pageName} pageName={pageName} />
      ))}
    </ul>
  );

  const mobileNavLinks = (
    <ul className={`${styles.list} ${styles.mobile}`}>
      {categories.map((category, index) => (
        <MobileCategoriesItem
          key={category.name}
          last={categories.length - 1 === index}
          category={category}
          onClick={() => handleToggle(index)}
          open={clicked === index}
        />
      ))}
      <hr />
      <ul className={`${styles.list} ${styles.mobile} ${styles.pages}`}>
        {['Our blog', 'About Seedra'].map((pageName) => (
          <MobilePagesItem key={pageName} pageName={pageName} />
        ))}
      </ul>
    </ul>
  );

  return width > 991.98 ? pcNavLinks : mobileNavLinks;
};
