import React, { FC, memo } from 'react';

import { Header as HeaderStyled, HeaderContainer } from './Header.styled';

export const Header: FC = memo(() => {
  return (
    <HeaderStyled>
      <HeaderContainer></HeaderContainer>
    </HeaderStyled>
  );
});

Header.displayName = 'Header';
