import React, { FC, memo, useState } from 'react';

import { sizes } from '@styles/variables';
import {
  FavoriteAndCartBlock,
  Line,
  LogoBlock,
  MobileMenuBlur,
  MenuButton,
  MobileMenu,
  MobileMenuContainer,
  Navbar as NavbarStyled,
  NavbarContainer,
  SearchFormBlock
} from './Navbar.styled';

import { useGetCategories } from '@hooks/useGetCategories';
import { useWindowSize } from '@hooks/useWindowSize';

import { Logo } from '@components/Layouts/Logo';
import { SocialMedia } from '@components/Layouts/SocialMedia';
import { Search } from '@components/UI/Forms/Search';
import { Icon } from '@components/UI/Icon';

import { Navigation } from './Navigation';
import { Favorite } from './Favorite';
import { Cart } from './Cart';

export const Navbar: FC = memo(() => {
  const { categories } = useGetCategories();
  const { width } = useWindowSize();
  const [open, setOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setOpen(!open);
  const handleCloseMenu = () => setOpen(false);

  return (
    <NavbarStyled>
      <NavbarContainer>
        <LogoBlock>
          <Logo width={97} height={21} onClick={handleCloseMenu} />
        </LogoBlock>
        {width > sizes.screens.tablet && (
          <>
            <Navigation />
            <SocialMedia />
            <SearchFormBlock>
              <Search />
            </SearchFormBlock>
          </>
        )}
        <FavoriteAndCartBlock>
          <Favorite />
          <Cart />
        </FavoriteAndCartBlock>
        {width < sizes.screens.tablet && (
          <MenuButton className={open ? 'open' : ''} onClick={handleToggleMenu}>
            <Icon iconName="menu" />
          </MenuButton>
        )}
      </NavbarContainer>
      {width < sizes.screens.tablet && (
        <MobileMenu className={open ? 'open' : ''}>
          <MobileMenuContainer>
            <Search />
            <Navigation
              handleCloseMenu={handleCloseMenu}
              categories={categories}
            />
            <Line />
            <SocialMedia />
          </MobileMenuContainer>
          <MobileMenuBlur />
        </MobileMenu>
      )}
    </NavbarStyled>
  );
});

Navbar.displayName = 'Navbar';
