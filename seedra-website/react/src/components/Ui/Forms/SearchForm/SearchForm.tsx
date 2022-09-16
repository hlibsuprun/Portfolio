import React, { FC } from 'react';

import { Icon } from '@/components/Ui/Icon/Icon';

import styles from './SearchForm.module.scss';

export const SearchForm: FC = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search" />
      <button type="submit">
        <Icon iconName="search" />
      </button>
    </form>
  );
};
