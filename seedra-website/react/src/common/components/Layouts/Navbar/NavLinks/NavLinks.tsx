import React, { FC, memo, useState } from 'react';

import styles from './NavLinks.module.scss';

import { useGetCategories } from '@hooks/useGetCategories';
import { useWindowSize } from '@hooks/useWindowSize';

import { MobileCategoriesItem } from '@components/Layouts/Navbar/NavLinks/MobileCategoriesItem/MobileCategoriesItem';
import { MobilePagesItem } from '@components/Layouts/Navbar/NavLinks/MobilePagesItem/MobilePagesItem';
import { PcPagesItem } from '@components/Layouts/Navbar/NavLinks/PcPagesItem/PcPagesItem';

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
