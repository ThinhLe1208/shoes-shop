import React from 'react';
import { Button, Card } from 'antd';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailProduct = () => {
    if (product.id) {
      navigate(`/detail/${product?.id}`);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img src={product.image} alt='img' />}
      >
        <h3>{product.name}</h3>
        <Button onClick={handleDetailProduct}>Detail</Button>
      </Card>
    </div>
  );
};

export default CardProduct;
