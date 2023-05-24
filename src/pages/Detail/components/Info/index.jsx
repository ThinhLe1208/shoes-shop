import React from 'react';
import { Button, Rate } from 'antd';

import styles from './styles.module.scss';

const Info = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{product.name}</h3>
      <Rate />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button type='default'>Add To Cart</Button>
      <Button type='primary'>Buy It Now</Button>
    </div>
  );
};

export default Info;
