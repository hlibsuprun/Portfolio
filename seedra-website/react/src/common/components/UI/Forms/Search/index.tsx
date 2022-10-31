import React, { ChangeEvent, FC, memo, useRef, useState } from 'react';

import { Search as SearchStyled } from './Search.styled';

import { Form } from './Form';
import { Products } from './Products';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

export const Search: FC = memo(() => {
  const [searchProduct, setSearchProduct] = useState<string>('');
  const [showProducts, setShowProducts] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useOnClickOutside({
    ref: productsRef,
    handler: () => setShowProducts(false),
    otherRef: formRef
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchProduct(event.target.value);
  };

  const handleShowProducts = () => setShowProducts(true);

  return (
    <SearchStyled>
      <Form
        ref={formRef}
        onFocus={handleShowProducts}
        onChange={handleChange}
        value={searchProduct}
      />
      {showProducts && (
        <Products searchProduct={searchProduct} ref={productsRef} />
      )}
    </SearchStyled>
  );
});

Search.displayName = 'Search';
