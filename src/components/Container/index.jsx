import React from 'react';

import styles from './styles.module.scss';

const Container = ({ children, className, ...rest }) => {
  return (
    <div
      className={styles.containerWrapper + (className ? ' ' + className : '')}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
