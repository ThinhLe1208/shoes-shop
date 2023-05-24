import React from 'react';

import styles from './styles.module.scss';

const Media = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <img src={product.image} alt='img' />
    </div>
  );
};

export default Media;
