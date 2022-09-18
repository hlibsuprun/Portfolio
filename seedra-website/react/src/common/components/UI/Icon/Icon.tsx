import React, { FC, memo } from 'react';

import Bundles from '@/assets/images/icons/bundles.svg';
import Cart from '@/assets/images/icons/cart.svg';
import CartNotification from '@/assets/images/icons/cart-notification.svg';
import Check from '@/assets/images/icons/check.svg';
import Clock from '@/assets/images/icons/clock.svg';
import Cross from '@/assets/images/icons/cross.svg';
import Faceboook from '@/assets/images/icons/facebook.svg';
import Fire from '@/assets/images/icons/fire.svg';
import Flower from '@/assets/images/icons/flower.svg';
import HeartComplete from '@/assets/images/icons/heart-complete.svg';
import HeartNotComplete from '@/assets/images/icons/heart-not-complete.svg';
import HeartOutline from '@/assets/images/icons/heart-outline.svg';
import Herb from '@/assets/images/icons/herb.svg';
import Instagram from '@/assets/images/icons/instagram.svg';
import Leaf from '@/assets/images/icons/leaf.svg';
import Menu from '@/assets/images/icons/menu.svg';
import Minus from '@/assets/images/icons/minus.svg';
import Plus from '@/assets/images/icons/plus.svg';
import Search from '@/assets/images/icons/search.svg';
import Star from '@/assets/images/icons/star.svg';
import StarHalfAlt from '@/assets/images/icons/star-half-alt.svg';
import Strawberry from '@/assets/images/icons/strawberry.svg';
import Tomato from '@/assets/images/icons/tomato.svg';

import styles from './Icon.module.scss';

interface IconProps {
  iconName: string;
}

export const Icon: FC<IconProps> = memo(({ iconName }) => {
  const classNames = `${styles.svg}`;

  return (
    <>
      {iconName === 'bundles' && <Bundles className={classNames} />}
      {iconName === 'cart-notification' && (
        <CartNotification className={classNames} />
      )}
      {iconName === 'cart' && <Cart className={classNames} />}
      {iconName === 'check' && <Check className={classNames} />}
      {iconName === 'clock' && <Clock className={classNames} />}
      {iconName === 'cross' && <Cross className={classNames} />}
      {iconName === 'facebook' && <Faceboook className={classNames} />}
      {iconName === 'fire' && <Fire className={classNames} />}
      {iconName === 'flower' && <Flower className={classNames} />}
      {iconName === 'heart-complete' && (
        <HeartComplete className={classNames} />
      )}
      {iconName === 'heart-not-complete' && (
        <HeartNotComplete className={classNames} />
      )}
      {iconName === 'heart-outline' && <HeartOutline className={classNames} />}
      {iconName === 'herb' && <Herb className={classNames} />}
      {iconName === 'instagram' && <Instagram className={classNames} />}
      {iconName === 'leaf' && <Leaf className={classNames} />}
      {iconName === 'menu' && <Menu className={classNames} />}
      {iconName === 'minus' && <Minus className={classNames} />}
      {iconName === 'plus' && <Plus className={classNames} />}
      {iconName === 'search' && <Search className={classNames} />}
      {iconName === 'star-half-alt' && <StarHalfAlt className={classNames} />}
      {iconName === 'star' && <Star className={classNames} />}
      {iconName === 'strawberry' && <Strawberry className={classNames} />}
      {iconName === 'tomato' && <Tomato className={classNames} />}
    </>
  );
});

Icon.displayName = 'Icon';
