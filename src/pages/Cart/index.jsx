import React, { useEffect } from 'react';
import { Button, Col, Row, Space, Spin, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import QuantityField from 'components/QuantityField';
import { clearCart, removeCart } from 'redux/slices/cartSlice';
import { storage } from 'utils/storage';
import { history } from 'utils/history';
import { notifications } from 'utils/notifications';
import LordIcon from 'components/LordIcon';
import { usersThunk } from 'redux/thunks/usersThunk';

const Cart = () => {
  const { cartList, totalPrice } = useSelector((state) => state.cart);
  const { isLoadingUsers } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = storage.checkLogin();
    if (!isLogin) {
      notifications.error('You must log in first.');
      history.push('/login');
    }
  }, []);

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Cart' }];

  const handleDeleteProduct = (id) => {
    dispatch(removeCart(id));
  };

  const handleCheckOut = async () => {
    if (cartList.length < 1) {
      notifications.warning('Your cart is empty.');
    } else {
      try {
        await dispatch(usersThunk.order()).unwrap();
        dispatch(clearCart());
        notifications.success('Check out successfully.');
      } catch (err) {
        notifications.error('Failed to check out.');
      }
    }
  };

  const columns = [
    {
      title: 'PRODUCT',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
      responsive: ['sm'],
      width: 160,
      render: (data) => {
        return (
          <img
            src={data?.image}
            alt='img'
          />
        );
      },
    },
    {
      title: 'INFO',
      dataIndex: 'info',
      key: 'info',
      render: (data) => {
        return (
          <div className={styles.infoCell}>
            <img
              className={styles.imageInfo}
              src={data?.image}
              alt='img'
            />
            <Link
              className={styles.name}
              to={`/detail/${data?.id}`}
            >
              {data?.name}
            </Link>
            <p className={styles.info}>
              <span>Size:</span> 32
            </p>
            <p className={styles.info}>
              <span>Color:</span> black
            </p>
            <p className={styles.price}>${data?.price}</p>

            <div className={styles.quantityInfoCell}>
              <QuantityField
                product={data}
                large
              />
              <LordIcon
                icon='trash'
                className='lordIcon'
                size='24px'
                state='hover-empty'
                onClick={() => handleDeleteProduct(data?.id)}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      width: '20%',
      responsive: ['md'],
      render: (data) => {
        return (
          <div className={styles.quantityCell}>
            <QuantityField
              product={data}
              large
            />
            <LordIcon
              icon='trash'
              className={styles.lordIcon}
              size='24px'
              state='hover-empty'
              onClick={() => handleDeleteProduct(data?.id)}
            />
          </div>
        );
      },
    },
    {
      title: 'TOTAL',
      dataIndex: 'total',
      key: 'total',
      align: 'right',
      width: '24%',
      render: (data) => {
        return <p className={styles.subPrice}>${(data?.qty * data?.price).toLocaleString()}</p>;
      },
    },
  ];

  const data = cartList.map((item, index) => ({
    key: index,
    product: item,
    info: item,
    quantity: item,
    total: item,
  }));

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb breadCrumbList={breadCrumbList} />
          <h3 className={styles.heading}>Your Cart</h3>

          <Row
            align={'top'}
            gutter={[32, 32]}
          >
            <Col
              span={24}
              xl={18}
            >
              <Table
                columns={columns}
                dataSource={data}
                rowKey={'key'}
                pagination={{ position: ['bottomLeft'], defaultPageSize: 4 }}
              />
            </Col>
            <Col
              span={24}
              xl={6}
            >
              <div className={styles.tableFooter}>
                <p className={styles.price}>
                  <span>Subtotal :</span>
                  <span>${totalPrice}</span>
                </p>
                <p className={styles.subInfo}>Taxes and shipping calculated at checkout</p>
                <Button
                  type='primary'
                  block
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
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
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default Cart;
