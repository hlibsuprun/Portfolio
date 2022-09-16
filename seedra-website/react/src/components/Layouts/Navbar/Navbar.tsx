import React, { FC, useState } from 'react';

import { FavoriteAndCart } from '@/components/Layouts/Navbar/FavoriteAndCart/FavoriteAndCart';
import { Logo } from '@/components/Layouts/Navbar/Logo/Logo';
import { NavLinks } from '@/components/Layouts/Navbar/NavLinks/NavLinks';
import { SearchForm } from '@/components/Ui/Forms/SearchForm/SearchForm';
import { Icon } from '@/components/Ui/Icon/Icon';
import { SocialMedia } from '@/components/Ui/SocialMedia/SocialMedia';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

import styles from './Navbar.module.scss';

export const Navbar: FC = () => {
  const { width } = useWindowSize();
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = () => (active ? setActive(false) : setActive(true));

  const pcNavLinks = (
    <div className={styles.pc}>
      <NavLinks />
      <SocialMedia />
      <SearchForm />
    </div>
  );

  const mobileNavLinks = (
    <div className={`${styles.mobile} ${active ? styles.open : ''}`}>
      <div className={styles.mobile__container}>
        <SearchForm />
        <NavLinks />
        <hr />
        <SocialMedia />
      </div>
    </div>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Logo />
        {width > 991.98 && pcNavLinks}
        <FavoriteAndCart />
        {width < 991.98 && (
          <button
            className={`${styles.menu} ${active ? styles.open : ''}`}
            onClick={handleToggle}>
            <Icon iconName="menu" />
          </button>
        )}
      </div>
      {width < 991.98 && mobileNavLinks}
    </nav>
  );
};
