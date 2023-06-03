import React from 'react';
import { Button, Rate, Space } from 'antd';

import styles from './styles.module.scss';
import QuantityField from 'components/QuantityField';

const Info = ({ product, star, randomSalePrecent, randomSalePrice }) => {
  const renderSizeList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return <Button key={index}>{item}</Button>;
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{product.name}</h3>
      <Rate
        className={styles.rate}
        disabled
        defaultValue={star}
        style={{
          fontSize: '18px',
        }}
      />
      {randomSalePrice ? (
        <div className={styles.price}>
          <p className={styles.mainPrice}>${product.price}</p>
          <p className={styles.subPrice}>${randomSalePrice}</p>
          <div className={styles.saleTag}>Sale {randomSalePrecent}%</div>
        </div>
      ) : (
        <p className={styles.mainPrice}>${product.price}</p>
      )}
      <p className={styles.description}>{product.description}</p>
      <p className={styles.quantity}>In stock {product.quantity} units, ready to be shipped.</p>
      <p className={styles.options}>Size</p>
      <Space>{renderSizeList(product.size)}</Space>
      <p className={styles.options}>Color</p>
      <Space>
        <Button style={{ backgroundColor: 'red' }} type='primary'>
          Red
        </Button>
        <Button style={{ backgroundColor: 'black' }} type='primary'>
          Black
        </Button>
        <Button style={{ backgroundColor: 'blue' }} type='primary'>
          Blue
        </Button>
      </Space>
      <p className={styles.options}>Quantity</p>
      <QuantityField />
      <Button type='primary' block>
        Add To Cart
      </Button>
      <Button type='default' block>
        Buy It Now
      </Button>
    </div>
  );
};

export default Info;
