import { Category } from '@prisma/client';
import React, { FC, memo, useState } from 'react';

import { List } from './CategoryList.styled';

import { useGetCategories } from '@hooks/useGetCategories';

import { CategoryItem } from './CategoryItem';

interface Props {
  handleCloseMenu?: () => void;
}

export const CategoryList: FC<Props> = memo(({ handleCloseMenu }) => {
  const categories = useGetCategories();
  const [clicked, setClicked] = useState<number | ''>('');

  const handleToggleAccordion = (index: number) => {
    if (clicked === index) {
      return setClicked('');
    }
    setClicked(index);
  };

  return (
    <List>
      {categories &&
        categories.map((category: Category, index) => (
          <CategoryItem
            key={category.id}
            category={category}
            onClick={handleCloseMenu}
            handleToggleAccordion={() => handleToggleAccordion(index)}
            open={clicked === index}
          />
        ))}
    </List>
  );
});

CategoryList.displayName = 'CategoryList';
