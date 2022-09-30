import React, { FC, memo } from 'react';

import styles from './SearchForm.module.scss';

import { Icon } from '@components/UI/Icon/Icon';

export const SearchForm: FC = memo(() => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search" />
      <button type="submit">
        <Icon iconName="search" />
      </button>
    </form>
  );
});

SearchForm.displayName = 'SearchForm';
