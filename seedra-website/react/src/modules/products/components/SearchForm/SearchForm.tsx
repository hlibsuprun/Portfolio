import React, { FC, memo } from 'react';

import { Icon } from '@/common/components/UI/Icon/Icon';

import styles from './SearchForm.module.scss';

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
