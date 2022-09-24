import NextHead from 'next/head';
import { FC } from 'react';

interface HeadProps {
  title: string;
}

export const Head: FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.svg"></link>
      <title>{title} | SEEDRA</title>
    </NextHead>
  );
};
