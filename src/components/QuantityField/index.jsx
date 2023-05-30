import React from 'react';
import { useDispatch } from 'react-redux';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { changeQuantity, decreaseQuantity } from 'redux/slices/cartSlice';
import { increaseQuantity } from 'redux/slices/cartSlice';

const QuantityField = ({ product }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product?.id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product?.id));
  };

  const handleChangeQuantity = (e) => {
    dispatch(
      changeQuantity({
        id: product?.id,
        qty: Number(e.target.value),
      })
    );
  };

  const handleBlurQuantity = (e) => {
    let qty = e.target.value;
    if (qty < 1) {
      qty = 1;
    }
    dispatch(
      changeQuantity({
        id: product?.id,
        qty: Math.floor(qty),
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <MinusOutlined onClick={handleDecreaseQuantity} />
      <input
        type='number'
        value={product?.qty}
        onInput={handleChangeQuantity}
        onBlur={handleBlurQuantity}
        min={1}
        step={1}
      />
      <PlusOutlined onClick={handleIncreaseQuantity} />
    </div>
  );
};

export default QuantityField;
