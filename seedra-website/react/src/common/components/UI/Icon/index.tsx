import React, { FC, memo } from 'react';

import Bundles from '@images/icons/bundles.svg';
import Cart from '@images/icons/cart.svg';
import CartNotification from '@images/icons/cart-notification.svg';
import Check from '@images/icons/check.svg';
import Clock from '@images/icons/clock.svg';
import Cross from '@images/icons/cross.svg';
import Facebook from '@images/icons/facebook.svg';
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

interface Props {
  iconName: string;
}

export const Icon: FC<Props> = memo(({ iconName }) => {
  return (
    <>
      {iconName === 'bundles' && <Bundles />}
      {iconName === 'cart-notification' && <CartNotification />}
      {iconName === 'cart' && <Cart />}
      {iconName === 'check' && <Check />}
      {iconName === 'clock' && <Clock />}
      {iconName === 'cross' && <Cross />}
      {iconName === 'facebook' && <Facebook />}
      {iconName === 'fire' && <Fire />}
      {iconName === 'flower' && <Flower />}
      {iconName === 'heart-complete' && <HeartComplete />}
      {iconName === 'heart-not-complete' && <HeartNotComplete />}
      {iconName === 'heart-outline' && <HeartOutline />}
      {iconName === 'herb' && <Herb />}
      {iconName === 'instagram' && <Instagram />}
      {iconName === 'leaf' && <Leaf />}
      {iconName === 'menu' && <Menu />}
      {iconName === 'minus' && <Minus />}
      {iconName === 'plus' && <Plus />}
      {iconName === 'search' && <Search />}
      {iconName === 'star-half-alt' && <StarHalfAlt />}
      {iconName === 'star' && <Star />}
      {iconName === 'strawberry' && <Strawberry />}
      {iconName === 'tomato' && <Tomato />}
    </>
  );
});

Icon.displayName = 'Icon';
