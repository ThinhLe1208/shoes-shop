import React, { useRef } from 'react';
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { HeartOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addCart } from 'redux/slices/cartSlice';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const starRef = useRef(Math.floor(Math.random() * 5 + 1));

  const handleShowDetailProduct = () => {
    navigate(`/detail/${product?.id}`);
  };

  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src={product.image}
          alt='img'
          className={styles.image}
        />
        <Button
          className={styles.detailBtn}
          type='primary'
          size='large'
          icon={<FontAwesomeIcon icon={faEye} />}
          onClick={handleShowDetailProduct}
        />
      </div>
      <div className={styles.body}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <Rate
          disabled
          defaultValue={starRef.current}
          style={{
            fontSize: '14px',
          }}
        />
      </div>
      <div className={styles.footer}>
        <Button
          type='primary'
          size='large'
          onClick={handleAddCart}
        >
          Add To Cart
        </Button>
        <Button
          icon={<HeartOutlined />}
          size='large'
        />
      </div>
    </div>
  );
};

export default CardProduct;
