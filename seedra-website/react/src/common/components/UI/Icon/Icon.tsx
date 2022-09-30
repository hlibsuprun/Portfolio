import React, { FC, memo } from 'react';

import Bundles from '@images/icons/bundles.svg';
import Cart from '@images/icons/cart.svg';
import CartNotification from '@images/icons/cart-notification.svg';
import Check from '@images/icons/check.svg';
import Clock from '@images/icons/clock.svg';
import Cross from '@images/icons/cross.svg';
import Faceboook from '@images/icons/facebook.svg';
import Fire from '@images/icons/fire.svg';
import Flower from '@images/icons/flower.svg';
import HeartComplete from '@images/icons/heart-complete.svg';
import HeartNotComplete from '@images/icons/heart-not-complete.svg';
import HeartOutline from '@images/icons/heart-outline.svg';
import Herb from '@images/icons/herb.svg';
import Instagram from '@images/icons/instagram.svg';
import Leaf from '@images/icons/leaf.svg';
import Menu from '@images/icons/menu.svg';
import Minus from '@images/icons/minus.svg';
import Plus from '@images/icons/plus.svg';
import Search from '@images/icons/search.svg';
import Star from '@images/icons/star.svg';
import StarHalfAlt from '@images/icons/star-half-alt.svg';
import Strawberry from '@images/icons/strawberry.svg';
import Tomato from '@images/icons/tomato.svg';

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
