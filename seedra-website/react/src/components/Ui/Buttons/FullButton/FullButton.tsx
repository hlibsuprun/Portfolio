import React, { FC } from 'react';

import styles from './FullButton.module.scss';

interface FullButtonProps {
  text: string;
}

export const FullButton: FC<FullButtonProps> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};
