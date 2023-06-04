import React from 'react';
import { useDispatch } from 'react-redux';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { changeQuantityByButton, changeQuantityByInput } from 'redux/slices/cartSlice';

const QuantityField = ({ product, large }) => {
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    dispatch(
      changeQuantityByButton({
        id: product?.id,
        qty: -1,
      })
    );
  };

  const handleIncreaseQuantity = () => {
    dispatch(
      changeQuantityByButton({
        id: product?.id,
        qty: 1,
      })
    );
  };

  const handleChangeQuantity = (e) => {
    dispatch(
      changeQuantityByInput({
        id: product?.id,
        qty: Number(e.target.value),
      })
    );
  };

  const handleBlurQuantity = (e) => {
    let qty = Number(e.target.value);
    if (qty < 1) {
      qty = 1;
    }
    dispatch(
      changeQuantityByInput({
        id: product?.id,
        qty: Math.floor(qty),
      })
    );
  };

  return (
    <div className={styles.wrapper + ' ' + (large && styles.large)}>
      <MinusOutlined onClick={handleDecreaseQuantity} />
      <input
        type='number'
        value={product?.qty ?? 1}
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
