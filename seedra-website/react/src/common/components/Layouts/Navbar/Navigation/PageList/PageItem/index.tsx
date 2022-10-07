import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import { colors, sizes } from '@styles/variables';
import { Arrow, Item, Link as LinkStyled } from './PageItem.styled';

import { useWindowSize } from '@hooks/useWindowSize';

interface Props {
  pageName: string;
  onClick?: () => void;
}

export const PageItem: FC<Props> = memo(({ pageName, onClick }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  const path = '/'.concat(pageName.toLowerCase().replace(' ', '-'));

  return (
    <Item>
      <NextLink href={path} passHref>
        <LinkStyled
          style={router.pathname === path ? { color: colors.primary } : {}}
          onClick={onClick}>
          {pageName}
          {width < sizes.screens.tablet && <Arrow />}
        </LinkStyled>
      </NextLink>
    </Item>
  );
});

PageItem.displayName = 'PageItem';
