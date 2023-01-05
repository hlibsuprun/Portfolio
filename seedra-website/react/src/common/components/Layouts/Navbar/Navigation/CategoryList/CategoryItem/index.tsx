import { Category, Subcategory } from '@prisma/client';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import { colors } from '@styles/variables';

import {
  Arrow,
  Button,
  CategoryName,
  Item,
  Subcategories,
  SubcategoryLink
} from './CategoryItem.styled';

interface Props {
  category: Category;
  onClick?: () => void;
  handleToggleAccordion: () => void;
  open: boolean;
}

export const CategoryItem: FC<Props> = memo(
  ({ category, onClick, handleToggleAccordion, open }) => {
    const router = useRouter();

    return (
      <Item>
        <Button onClick={handleToggleAccordion}>
          <CategoryName className={open ? 'open' : ''}>
            {category.name}
          </CategoryName>
          <Arrow className={open ? 'open' : ''} />
        </Button>
        {open && (
          <Subcategories>
            {category.subcategories.map((subcategory: Subcategory) => (
              <NextLink key={subcategory.id} href="/" passHref>
                <SubcategoryLink
                  style={
                    router.pathname === '/' ? { color: colors.primary } : {}
                  }
                  onClick={onClick}>
                  {subcategory.name}
                </SubcategoryLink>
              </NextLink>
            ))}
          </Subcategories>
        )}
      </Item>
    );
  }
);

CategoryItem.displayName = 'CategoryItem';
