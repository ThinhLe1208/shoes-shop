import React from 'react';

import styles from './styles.module.scss';

const Container = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
