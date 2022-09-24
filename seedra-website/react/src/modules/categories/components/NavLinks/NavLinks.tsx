import { Category } from '@prisma/client';
import React, { FC, memo, useEffect, useState } from 'react';

import { useWindowSize } from '@/common/hooks/useWindowSize';
import { MobileCategoriesItem } from '@/modules/categories/components/NavLinks/MobileCategoriesItem/MobileCategoriesItem';
import { MobilePagesItem } from '@/modules/categories/components/NavLinks/MobilePagesItem/MobilePagesItem';
import { PcPagesItem } from '@/modules/categories/components/NavLinks/PcPagesItem/PcPagesItem';

import { useGetCategories } from '../../hooks/useGetCategories';
import styles from './NavLinks.module.scss';

interface NavLinksProps {
  handleCloseMenu: () => void;
}

export const NavLinks: FC<NavLinksProps> = memo(({ handleCloseMenu }) => {
  const { width } = useWindowSize();
  const categories = useGetCategories();
  const [clicked, setClicked] = useState<number | ''>();

  const handleToggleAccordion = (index: number) => {
    if (clicked === index) {
      return setClicked('');
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
      {categories &&
        categories.map((category, index) => (
          <MobileCategoriesItem
            key={category.name}
            firstItem={index === 0}
            lastItem={index === categories.length - 1}
            category={category}
            handleToggleAccordion={() => handleToggleAccordion(index)}
            open={clicked === index}
            handleCloseMenu={handleCloseMenu}
          />
        ))}
      <hr />
      <ul className={`${styles.list} ${styles.mobile} ${styles.pages}`}>
        {['All products', 'About Seedra', 'Our blog'].map((pageName) => (
          <MobilePagesItem
            key={pageName}
            pageName={pageName}
            handleCloseMenu={handleCloseMenu}
          />
        ))}
      </ul>
    </ul>
  );

  return width > 991.98 ? pcNavLinks : mobileNavLinks;
});

NavLinks.displayName = 'NavLinks';
