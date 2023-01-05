import styled from 'styled-components';

import { em } from '@styles/mixins';
import { colors, sizes } from '@styles/variables';

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  max-width: 100%;
  height: ${em(72)};
  background-color: ${colors.white};
  box-shadow: 0 ${em(4)} ${em(12)} rgba(207, 207, 207, 0.25);
  z-index: 100;
`;

export const NavbarContainer = styled.div`
  display: flex;
  max-width: ${sizes.container.maxWidth};
  height: 100%;
  margin: 0 auto;
  padding: 0 ${sizes.container.padding};
  align-items: center;
`;

export const MobileMenu = styled.div`
  position: relative;
  right: 0;
  display: none;
  width: 100vw;
  height: calc(100vh - ${em(72)});
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &.open {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(280px - 32px);
  height: calc(100% - 32px);
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0 ${em(4)} ${em(12)} rgba(207, 207, 207, 0.25) inset;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s ease;
`;

export const MobileMenuBlur = styled.div`
  width: calc(100vw - 280px);
  height: 100%;
  backdrop-filter: blur(2px);
`;

export const Line = styled.div`
  position: relative;
  right: 16px;
  width: 280px;
  background-color: #cfcfcf;
  height: ${em(1)};
  margin: ${em(10)} 0 ${em(10)} 0;
`;

export const LogoBlock = styled.div`
  margin-right: ${em(24)};
  flex: 1;
`;

export const SearchFormBlock = styled.div`
  margin: 0 ${em(12)};
`;

export const FavoriteAndCartBlock = styled.div`
  display: flex;
  gap: ${em(12)};

  @media screen and (min-width: ${sizes.screens.tablet}px) {
    gap: ${em(24)};
  }
`;

export const MenuButton = styled.button`
  margin-left: ${em(16)};
  padding: ${em(12)};
  border: ${em(1)} solid ${colors.light.gray};
  border-radius: 100%;

  svg {
    display: block;
    width: ${em(24)};
    height: ${em(24)};
    fill: ${colors.text.secondary};
    transition: fill 0.3s ease;
  }
  &.open > svg {
    fill: ${colors.brand};
  }
`;
