import React, { useState } from 'react';
import { Button, Rate, Skeleton, Space } from 'antd';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';
import QuantityFieldDelay from 'components/QuantityFieldDelay';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, clearCart } from 'redux/slices/cartSlice';

const Info = ({ product, star, randomSalePrecent, randomSalePrice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantityDetail = useSelector((state) => state.cart.quantityDetail);
  const [size, setSize] = useState(0);

  const renderSizeList = (list) => {
    if (Array.isArray(list)) {
      return list.map((item, index) => {
        return (
          <Button
            key={index}
            type={size === index ? 'primary' : 'default'}
            onClick={() => setSize(index)}
          >
            {item}
          </Button>
        );
      });
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addCart({
        product: product,
        qty: quantityDetail,
      })
    );
  };

  const handleBuyItNow = () => {
    dispatch(clearCart());
    dispatch(
      addCart({
        product: product,
        qty: quantityDetail,
      })
    );
    navigate('/cart');
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{product?.name}</h3>
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
          <p className={styles.mainPrice}>${product?.price}</p>
          <p className={styles.subPrice}>${randomSalePrice}</p>
          <div className={styles.saleTag}>Sale {randomSalePrecent}%</div>
        </div>
      ) : (
        <div className={styles.price}>
          <p className={styles.mainPrice}>${product?.price}</p>
        </div>
      )}
      <p className={styles.description}>{product?.description}</p>
      <p className={styles.quantity}>In stock {product?.quantity} units, ready to be shipped.</p>
      <p className={styles.options}>Size</p>
      <Space>{renderSizeList(product?.size)}</Space>
      <p className={styles.options}>Color</p>
      <Space>
        <Button
          style={{ color: 'var(--white)', backgroundColor: 'red' }}
          type='primary'
        >
          Red
        </Button>
        <Button
          style={{ color: 'var(--white)', backgroundColor: 'black' }}
          type='primary'
        >
          Black
        </Button>
        <Button
          style={{ color: 'var(--white)', backgroundColor: 'blue' }}
          type='primary'
        >
          Blue
        </Button>
      </Space>
      <p className={styles.options}>Quantity</p>
      <QuantityFieldDelay large />
      <Button
        type='primary'
        block
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
      <Button
        type='default'
        block
        onClick={handleBuyItNow}
      >
        Buy It Now
      </Button>
    </div>
  );
};

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton
        active
        paragraph={{ rows: 1 }}
      />
      <Skeleton active />
      <Skeleton
        active
        paragraph={{ rows: 1 }}
      />
      <Space>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Skeleton.Button
              key={index}
              active
            />
          ))}
      </Space>
      <Skeleton
        active
        paragraph={{ rows: 1 }}
      />
      <Space>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton.Button
              key={index}
              active
            />
          ))}
      </Space>
      <Skeleton.Button
        block
        active
      />
      <Skeleton.Button
        block
        active
      />
    </div>
  );
};

Info.Loading = Loading;

export default Info;
