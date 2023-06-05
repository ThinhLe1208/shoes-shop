import React from 'react';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import QuantityField from 'components/QuantityField';
import { removeCart } from 'redux/slices/cartSlice';
import LordIcon from 'components/LordIcon';

const HeaderCartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(removeCart(product?.id));
  };

  return (
    <div className={styles.wrapper}>
      <Row
        justify='space-between'
        align='top'
      >
        <Col span={6}>
          <img
            className={styles.image}
            src={product?.image}
            alt='img'
          />
        </Col>

        <Col span={18}>
          <div className={styles.heading}>
            <p className={styles.name}>{product?.name}</p>
            <LordIcon
              icon='trash'
              className={styles.lordIcon}
              size='20px'
              state='hover-empty'
              onClick={handleDeleteProduct}
            />
          </div>
          <p className={styles.info}>
            <span>Size:</span> 36
          </p>
          <p className={styles.info}>
            <span>Color:</span> Black
          </p>

          <Row
            justify='space-between'
            align='middle'
          >
            <QuantityField product={product} />
            <p className={styles.price}>${(product?.qty * product?.price).toLocaleString()}</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderCartItem;
