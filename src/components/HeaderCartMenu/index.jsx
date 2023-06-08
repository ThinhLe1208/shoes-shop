import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Empty, Popover, Space, Spin } from 'antd';

import styles from './styles.module.scss';
import HeaderCartItem from 'components/HeaderCartItem';
import LordIcon from 'components/LordIcon';
import { notifications } from 'utils/notifications';
import { usersThunk } from 'redux/thunks/usersThunk';
import { clearCart } from 'redux/slices/cartSlice';

const HeaderCartMenu = () => {
  const { cartList, totalPrice, totalQuantity } = useSelector((state) => state.cart);
  const { isLoadingUsers } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleViewCart = () => {
    setOpen(false);
    navigate('/cart');
  };

  const handleCheckOut = async () => {
    try {
      await dispatch(usersThunk.order()).unwrap();
      dispatch(clearCart());
      notifications.success('Check out successfully.');
    } catch (err) {
      notifications.error('Failed to check out.');
    }
    setOpen(false);
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
          <p className={styles.totalText}>Subtotal</p>
          <p className={styles.totalNumber}>${totalPrice}</p>
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
            disabled={isLoadingUsers}
            onClick={handleCheckOut}
          >
            <Space>
              Check Out
              <Spin
                spinning={isLoadingUsers}
                style={{ color: '#fff' }}
              />
            </Space>
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
        <Badge
          count={totalQuantity}
          overflowCount={99}
          style={{
            lineHeight: '26px',
            boxShadow: '0 0 0 1.5px #fff',
            color: 'var(--color-text-secondary )',
            backgroundColor: 'var(--color-secondary)',
          }}
        >
          <LordIcon
            className='lordIcon'
            icon='cart'
            trigger='hover'
            state='hover-1'
          />
        </Badge>
      </Popover>
    </div>
  );
};

export default HeaderCartMenu;
