import React, { FC, memo, useState } from 'react';

import { FavoriteAndCart } from '@/common/components/Layouts/Navbar/FavoriteAndCart/FavoriteAndCart';
import { Logo } from '@/common/components/Layouts/Navbar/Logo/Logo';
import { Icon } from '@/common/components/UI/Icon/Icon';
import { SocialMedia } from '@/common/components/UI/SocialMedia/SocialMedia';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import { NavLinks } from '@/modules/categories/components/NavLinks/NavLinks';
import { SearchForm } from '@/modules/products/components/SearchForm/SearchForm';

import styles from './Navbar.module.scss';

export const Navbar: FC = memo(() => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setOpen(!open);
  const handleCloseMenu = () => setOpen(false);

  const pcOrder = (
    <div className={styles.pc}>
      <NavLinks handleCloseMenu={handleCloseMenu} />
      <SocialMedia />
      <SearchForm />
    </div>
  );

  const mobileOrder = (
    <div className={`${styles.mobile} ${open ? styles.open : ''}`}>
      <div className={styles.mobile__container}>
        <SearchForm />
        <NavLinks handleCloseMenu={handleCloseMenu} />
        <hr />
        <SocialMedia />
      </div>
    </div>
  );

  return (
    <nav
      className={`${styles.navbar} ${width < 991.98 && open && styles.open}`}>
      <div className={styles.navbar__container}>
        <Logo handleCloseMenu={handleCloseMenu} />
        {width > 991.98 && pcOrder}
        <FavoriteAndCart />
        {width < 991.98 && (
          <button
            className={`${styles.menu} ${open ? styles.open : ''}`}
            onClick={handleToggleMenu}>
            <Icon iconName="menu" />
          </button>
        )}
      </div>
      {width < 991.98 && mobileOrder}
    </nav>
  );
});

Navbar.displayName = 'Navbar';
