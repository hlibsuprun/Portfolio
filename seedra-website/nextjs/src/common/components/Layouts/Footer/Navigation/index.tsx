import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import {
  Navigation as NavigationStyled,
  LogoBlock,
  List,
  Item,
  Link as LinkStyled
} from './Navigation.styled';

import { Logo } from '@components/Layouts/Logo';
import { colors } from '@styles/variables';

interface Props {}

export const Navigation: FC<Props> = memo(() => {
  const router = useRouter();

  const path = (pageName: string) =>
    '/'.concat(pageName.toLowerCase().replace(' ', '-'));

  return (
    <NavigationStyled>
      <List>
        {['all products', 'about seedra', 'our blog'].map((pageName) => (
          <Item key={pageName}>
            <NextLink href={path(pageName)} passHref>
              <LinkStyled
                uppercase={true}
                style={
                  router.pathname === path(pageName)
                    ? { color: colors.primary }
                    : {}
                }>
                {pageName}
              </LinkStyled>
            </NextLink>
          </Item>
        ))}
      </List>
      <LogoBlock>
        <Logo width={125} height={27} />
      </LogoBlock>
      <List second={true}>
        {['Terms&Conditions', 'Privacy Policy'].map((pageName) => (
          <Item key={pageName}>
            <NextLink href="/" passHref>
              <LinkStyled uppercase={false}>{pageName}</LinkStyled>
            </NextLink>
          </Item>
        ))}
      </List>
    </NavigationStyled>
  );
});

Navigation.displayName = 'Navigation';
