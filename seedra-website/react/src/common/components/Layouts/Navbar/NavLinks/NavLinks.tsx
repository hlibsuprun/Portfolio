import React, { FC, memo, useState } from 'react';

import { categories } from '@/common/components/Layouts/Navbar/NavLinks/categories';
import { MobileCategoriesItem } from '@/common/components/Layouts/Navbar/NavLinks/MobileCategoriesItem/MobileCategoriesItem';
import { MobilePagesItem } from '@/common/components/Layouts/Navbar/NavLinks/MobilePagesItem/MobilePagesItem';
import { PcPagesItem } from '@/common/components/Layouts/Navbar/NavLinks/PcPagesItem/PcPagesItem';
import { useWindowSize } from '@/common/hooks/useWindowSize';

import styles from './NavLinks.module.scss';

interface NavLinksProps {
  handleCloseMenu: () => void;
}

export const NavLinks: FC<NavLinksProps> = memo(({ handleCloseMenu }) => {
  const { width } = useWindowSize();
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
      {categories.map((category, index) => (
        <MobileCategoriesItem
          key={category.name}
          lastItem={categories.length - 1 === index}
          category={category}
          handleToggleAccordion={() => handleToggleAccordion(index)}
          open={clicked === index}
          handleCloseMenu={handleCloseMenu}
        />
      ))}
      <hr />
      <ul className={`${styles.list} ${styles.mobile} ${styles.pages}`}>
        {['Our blog', 'About Seedra'].map((pageName) => (
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
