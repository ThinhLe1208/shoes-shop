import React, { useEffect, useState } from 'react';
import { Button, Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import { addCart } from 'redux/slices/cartSlice';
import LordIcon from 'components/LordIcon';
import { usersThunk } from 'redux/thunks/usersThunk';
import { notifications } from 'utils/notifications';

const CardProduct = ({ product, favoriteList, star, randomSalePrecent, randomSalePrice, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    let result;
    if (Array.isArray(favoriteList)) {
      result = favoriteList?.some((item) => item.id === product?.id);
    }
    setIsLike(result);
  }, [favoriteList, product]);

  const handleShowDetailProduct = () => {
    navigate(`/detail/${product?.id}`);
  };

  const handleAddCart = () => {
    dispatch(addCart({ product: product, qty: 1 }));
  };

  const handleLikeProduct = async () => {
    if (isLike) {
      try {
        await dispatch(usersThunk.unlike(product?.id)).unwrap();
        notifications.success('Remove shoes from favorite list successfully.');
      } catch (err) {
        notifications.error('Failed to remvoe shoes from favorite list.');
      }
    } else {
      try {
        await dispatch(usersThunk.like(product?.id)).unwrap();
        notifications.success('Add shoes to favorite list successfully.');
      } catch (err) {
        notifications.error('Failed to add shoes to favorite list.');
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.top}>
          {randomSalePrice ? <div className={styles.saleTag}>Sale {randomSalePrecent}%</div> : <div></div>}
          <Button
            icon={
              <LordIcon
                className={styles.lordIcon + ' ' + (isLike ? styles.isLike : '')}
                icon='heart'
                trigger='hover'
              />
            }
            size='large'
            type={isLike ? 'primary' : 'default'}
            loading={isLoading}
            className={styles.likeBtn}
            onClick={handleLikeProduct}
          />
        </div>
        <img
          src={product.image}
          alt='img'
          className={styles.image}
        />
        <Button
          className={styles.detailBtn}
          type='primary'
          size='large'
          icon={
            <LordIcon
              icon='eye'
              trigger='loop'
              delay='500'
              stroke='100'
              colors='primary:#ffffff,secondary:#ffffff'
            />
          }
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
        <Button
          type='primary'
          block
          onClick={handleAddCart}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default CardProduct;
