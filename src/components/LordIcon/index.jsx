import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { Element } from 'lord-icon-element/element';

const ICONS = {
  search: require('../../assets/icons/search.json'),
  user: require('../../assets/icons/user.json'),
  heart: require('../../assets/icons/heart.json'),
  cart: require('../../assets/icons/cart.json'),
  arrowUp: require('../../assets/icons/arrowUp.json'),
  arrowDown: require('../../assets/icons/arrowDown.json'),
  arrow: require('../../assets/icons/arrow.json'),
  eye: require('../../assets/icons/eye.json'),
  trash: require('../../assets/icons/trash.json'),
  success: require('../../assets/icons/success.json'),
  warning: require('../../assets/icons/warning.json'),
  error: require('../../assets/icons/error.json'),
  info: require('../../assets/icons/info.json'),
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
