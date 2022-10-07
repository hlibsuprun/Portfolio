import Link from 'next/link';
import React, { FC, memo } from 'react';

import LogoSVG from '@images/logo.svg';

import { em } from '@styles/mixins';

interface Props {
  width: number;
  height: number;
  onClick: () => void;
}

export const Logo: FC<Props> = memo(({ width, height, onClick }) => {
  return (
    <Link href="/" passHref>
      <a onClick={onClick}>
        <LogoSVG style={{ width: em(width), height: em(height) }} />
      </a>
    </Link>
  );
});

Logo.displayName = 'Logo';
