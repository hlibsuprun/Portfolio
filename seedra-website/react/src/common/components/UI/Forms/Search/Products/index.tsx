import React, { FC, ForwardedRef, forwardRef, memo, useMemo } from 'react';

import {
  Products as ProductsStyled,
  List,
  Item,
  Link
} from './Products.styled';

import { useGetProducts } from '@hooks/useGetProducts';

interface Props {
  searchProduct: string;
  ref: ForwardedRef<HTMLDivElement>;
}

export const Products: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ searchProduct }, ref) => {
    const { products, loading, error } = useGetProducts();

    const filteredProducts = useMemo(() => {
      if (searchProduct.length >= 3) {
        return products?.filter((product) =>
          product.name
            .toLowerCase()
            .trim()
            .includes(searchProduct.toLowerCase().trim())
        );
      }
      return [];
    }, [products, searchProduct]);

    if (filteredProducts && filteredProducts.length >= 1) {
      return (
        <ProductsStyled ref={ref}>
          <List>
            {filteredProducts.map((product) => (
              <Item key={product.id}>
                <Link>
                  {product.name.length === 123
                    ? product.name.slice(0, 119).concat('...')
                    : product.name}
                </Link>
              </Item>
            ))}
          </List>
        </ProductsStyled>
      );
    }

    return <></>;
  })
);

Products.displayName = 'Products';
