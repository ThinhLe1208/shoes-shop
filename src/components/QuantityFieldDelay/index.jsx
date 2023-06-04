import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { changeQuantityDetailByButton, changeQuantityDetailByInput } from 'redux/slices/cartSlice';
import { useHref } from 'react-router';

const QuantityFieldDelay = memo(({ large }) => {
  const dispatch = useDispatch();
  const href = useHref();
  const quantityDetail = useSelector((state) => state.cart.quantityDetail);

  const handleDecreaseQuantity = () => {
    dispatch(changeQuantityDetailByButton(-1));
  };

  const handleIncreaseQuantity = () => {
    dispatch(changeQuantityDetailByButton(1));
  };

  const handleChangeQuantity = (e) => {
    dispatch(changeQuantityDetailByInput(Number(e.target.value)));
  };

  const handleBlurQuantity = (e) => {
    let qty = Number(e.target.value);
    if (qty < 1) {
      qty = 1;
    }
    dispatch(changeQuantityDetailByInput(Math.floor(qty)));
  };

  useEffect(() => {
    dispatch(changeQuantityDetailByInput(1));
  }, [dispatch, href]);

  return (
    <div className={styles.wrapper + ' ' + (large && styles.large)}>
      <MinusOutlined onClick={handleDecreaseQuantity} />
      <input
        type='number'
        value={quantityDetail ?? 1}
        onInput={handleChangeQuantity}
        onBlur={handleBlurQuantity}
        min={1}
        step={1}
      />
      <PlusOutlined onClick={handleIncreaseQuantity} />
    </div>
  );
});

export default QuantityFieldDelay;
