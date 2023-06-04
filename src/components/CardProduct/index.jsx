import React from 'react';
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { addCart } from 'redux/slices/cartSlice';

const CardProduct = ({ product, star, randomSalePrecent, randomSalePrice }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowDetailProduct = () => {
    navigate(`/detail/${product?.id}`);
  };

  const handleAddCart = () => {
    dispatch(addCart({ product: product, qty: 1 }));
  };

  const handleLikeProduct = () => {
    console.log('like');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.top}>
          {randomSalePrice ? <div className={styles.saleTag}>Sale {randomSalePrecent}%</div> : <div></div>}
          <Button icon={<HeartOutlined />} size='large' ghost className={styles.likeBtn} onClick={handleLikeProduct} />
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
        {randomSalePrice ? (
          <div className={styles.price}>
            <p className={styles.mainPrice}>${product.price}</p>
            <p className={styles.subPrice}>${randomSalePrice}</p>
          </div>
        ) : (
          <div className={styles.price}>
            <p className={styles.mainPrice}>${product.price}</p>
          </div>
        )}
        <Rate
          disabled
          defaultValue={star}
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
