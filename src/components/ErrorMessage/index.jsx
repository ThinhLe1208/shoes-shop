import React from 'react';

import styles from './styles.module.scss';

const ErrorMessage = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{children}</p>
    </div>
  );
};

export default ErrorMessage;
