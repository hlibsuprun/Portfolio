import React, { FC, memo } from 'react';

import { List } from './PageList.styled';

import { PageItem } from './PageItem';

interface Props {
  handleCloseMenu?: () => void;
}

export const PageList: FC<Props> = memo(({ handleCloseMenu }) => {
  return (
    <List>
      {['All products', 'About Seedra', 'Our blog'].map((pageName) => (
        <PageItem
          key={pageName}
          pageName={pageName}
          onClick={handleCloseMenu}
        />
      ))}
    </List>
  );
});

PageList.displayName = 'PageList';
