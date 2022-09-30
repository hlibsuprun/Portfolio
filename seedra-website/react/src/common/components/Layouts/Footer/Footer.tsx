import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, memo } from 'react';

import styles from './Footer.module.scss';

import { Logo } from '@components/Layouts/Footer/Logo/Logo';
import { SocialMedia } from '@components/UI/SocialMedia/SocialMedia';

export const Footer: FC = memo(() => {
  const router = useRouter();

  const path = (pageName: string) =>
    '/'.concat(pageName.toLowerCase().replace(' ', '-'));

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.nav}>
          <ul className={styles.list}>
            {['all products', 'about seedra', 'our blog'].map((pageName) => (
              <li key={pageName} className={styles.item}>
                <Link href={'/'.concat(pageName.replace(' ', '-'))} passHref>
                  <a
                    className={`
                       ${styles.link} 
                       ${styles.uppercase}
                       ${
                         router.pathname === path(pageName) ? styles.active : ''
                       }
                     `}>
                    {pageName}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Logo />
          <ul className={styles.list}>
            {['Terms&Conditions', 'Privacy Policy'].map((pageName) => (
              <li key={pageName} className={styles.item}>
                <a className={styles.link}>{pageName}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className={styles.other}>
          <SocialMedia />
          <p className={styles.rights}>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
