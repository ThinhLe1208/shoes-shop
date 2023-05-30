import React, { useMemo, useState } from 'react';
import { Button, Empty, Popover } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import HeaderCartItem from 'components/HeaderCartItem';
import { useNavigate } from 'react-router-dom';

const HeaderCartMenu = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const totalPriceMemo = useMemo(() => {
    const totalPrice = cartList.reduce((acc, item) => {
      return (acc += item.qty * item.price);
    }, 0);
    return totalPrice;
  }, [cartList]);

  const handleViewCart = () => {
    setOpen(false);
    navigate('/cart');
  };

  const handleCheckOut = () => {
    setOpen(false);
    navigate('/checkout');
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const renderCartList = (list) => {
    if (Array.isArray(list)) {
      return cartList.map((item, index) => {
        return (
          <HeaderCartItem
            key={index}
            product={item}
          />
        );
      });
    }
  };

  const emptyContent = (
    <div className={styles.emptyContent}>
      <Empty
        image={require('../../assets/images/empty_cart.png')}
        imageStyle={{
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 30,
          objectFit: 'contain',
        }}
        description={<span>Your cart is empty</span>}
      />
    </div>
  );

  const filledContent = (
    <div className={styles.filledContent}>
      <div className={styles.body}>{renderCartList(cartList)}</div>
      <div className={styles.footer}>
        <div className={styles.total}>
          <p className={styles.totalText}>Total</p>
          <p className={styles.totalNumber}>${totalPriceMemo.toLocaleString()}</p>
        </div>
        <div className={styles.buttons}>
          <Button
            type='primary'
            block
            onClick={handleViewCart}
          >
            View Cart
          </Button>
          <Button
            type='primary'
            block
            onClick={handleCheckOut}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <Popover
        content={cartList.length > 0 ? filledContent : emptyContent}
        trigger='click'
        placement='bottomRight'
        arrow={false}
        open={open}
        onOpenChange={handleOpenChange}
      >
        <ShoppingCartOutlined />
      </Popover>
    </div>
  );
};

export default HeaderCartMenu;
