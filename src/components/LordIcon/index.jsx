import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { Element } from 'lord-icon-element/element';

import search from 'assets/icons/search.json';
import user from 'assets/icons/user.json';
import heart from 'assets/icons/heart.json';
import cart from 'assets/icons/cart.json';
import arrowUp from 'assets/icons/arrowUp.json';
import arrowDown from 'assets/icons/arrowDown.json';
import arrow from 'assets/icons/arrow.json';
import menu from 'assets/icons/menu.json';
import filter from 'assets/icons/filter.json';
import eye from 'assets/icons/eye.json';
import trash from 'assets/icons/trash.json';
import close from 'assets/icons/close.json';
import success from 'assets/icons/success.json';
import warning from 'assets/icons/warning.json';
import error from 'assets/icons/error.json';
import info from 'assets/icons/info.json';

const ICONS = {
  search,
  user,
  heart,
  cart,
  arrowUp,
  arrowDown,
  arrow,
  menu,
  filter,
  eye,
  trash,
  close,
  success,
  warning,
  error,
  info,
};

Element.setIconLoader((name) => {
  return ICONS[name];
});

defineElement(lottie.loadAnimation);

const LordIcon = ({ icon, className, trigger = 'hover', size = '30px', ...rest }) => {
  return (
    <lord-icon
      icon={icon}
      class={className}
      trigger={trigger}
      style={{
        width: size,
      }}
      {...rest}
    />
  );
};

export default LordIcon;
