import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

const LordIcon = ({ src, className, trigger = 'hover', size = '30px', ...rest }) => {
  return (
    <lord-icon
      src={src}
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
