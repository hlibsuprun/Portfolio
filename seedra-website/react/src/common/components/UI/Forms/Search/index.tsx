import React, { FC, memo } from 'react';

import { Button, Form, Input } from './Search.styled';

import { Icon } from '@components/UI/Icon';

export const SearchForm: FC = memo(() => {
  return (
    <Form>
      <Input type="text" placeholder="Search" />
      <Button type="submit">
        <Icon iconName="search" />
      </Button>
    </Form>
  );
});

SearchForm.displayName = 'SearchForm';
