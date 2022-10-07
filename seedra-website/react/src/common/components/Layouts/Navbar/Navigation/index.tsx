import React, { FC, memo } from 'react';

import { sizes } from '@styles/variables';
import { Line, Navigation as NavigationStyled } from './Navigation.styled';

import { useWindowSize } from '@hooks/useWindowSize';

import { PageList } from './PageList';
import { CategoryList } from './CategoryList';

interface Props {
  handleCloseMenu?: () => void;
}

export const Navigation: FC<Props> = memo(({ handleCloseMenu }) => {
  const { width } = useWindowSize();

  const pc = (
    <NavigationStyled>
      <PageList />
    </NavigationStyled>
  );

  const mobile = (
    <NavigationStyled>
      <CategoryList handleCloseMenu={handleCloseMenu} />
      <Line />
      <PageList handleCloseMenu={handleCloseMenu} />
    </NavigationStyled>
  );

  return width < sizes.screens.tablet ? mobile : pc;
});

Navigation.displayName = 'Navigation';
