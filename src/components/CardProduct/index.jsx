import React, { useMemo, useRef } from 'react';
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { HeartOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addCart } from 'redux/slices/cartSlice';

const CardProduct = ({ product, saleProductList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check this product is in saleProductList or not
  const isSale = useMemo(() => {
    return saleProductList.find((item) => item.id === product.id);
  }, [product, saleProductList]);

  // make a random sale price for feature products
  const salePrecentRef = useRef(Math.floor(Math.random() * 20 + 10));
  const randomSalePriceNum = useMemo(() => {
    if (isSale) {
      return Math.ceil((product?.price * (100 - salePrecentRef.current)) / 100);
    } else {
      return null;
    }
  }, [isSale, product]);
  const newPriceRef = useRef(randomSalePriceNum);

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
        <div className={styles.top}>
          {isSale ? <div className={styles.saleTag}>Sale {salePrecentRef.current}%</div> : <div></div>}
          <Button icon={<HeartOutlined />} size='large' />
        </div>
        <img src={product.image} alt='img' className={styles.image} />
        <Button
          className={styles.detailBtn}
          type='primary'
          size='large'
          icon={<FontAwesomeIcon icon={faEye} />}
          onClick={handleShowDetailProduct}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        {isSale ? (
          <div className={styles.price}>
            <p className={styles.mainPrice}>${newPriceRef.current}</p>
            <p className={styles.subPrice}>${product.price}</p>
          </div>
        ) : (
          <p className={styles.mainPrice}>${product.price}</p>
        )}
        <Rate
          disabled
          defaultValue={starRef.current}
          style={{
            fontSize: '14px',
          }}
        />
      </div>
      <div className={styles.footer}>
        <Button type='primary' block onClick={handleAddCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
